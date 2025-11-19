from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from werkzeug.utils import secure_filename
import PyPDF2
import docx
import json
import re
from datetime import datetime
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Configure Gemini API
GEMINI_API_KEY = "AIzaSyBQyxYDc6klb1Qws-o-GkG0k0ZGtRiIrTE"
genai.configure(api_key=GEMINI_API_KEY)

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf', 'docx', 'txt'}
MAX_FILE_SIZE = 16 * 1024 * 1024  # 16MB

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_SIZE

# Load ML Model
print("\n🤖 Loading ML Model...")
try:
    ml_model = joblib.load('best_model.pkl')
    ml_vectorizer = joblib.load('tfidf_vectorizer.pkl')
    ml_model_info = joblib.load('model_info.pkl')
    print(f"✅ ML Model Loaded: {ml_model_info['model_name']}")
    print(f"✅ Model Accuracy: {ml_model_info['test_accuracy']*100:.2f}%")
    print(f"✅ Number of Classes: {ml_model_info['num_classes']}")
    ML_MODEL_LOADED = True
except Exception as e:
    print(f"⚠️ ML Model not loaded: {e}")
    print("⚠️ ML prediction endpoints will not be available")
    ML_MODEL_LOADED = False

# Job role skills database
JOB_ROLES = {
    'software_engineer': {
        'name': 'Software Engineer',
        'required_skills': ['Python', 'Java', 'JavaScript', 'Git', 'SQL', 'REST API', 'OOP', 'Data Structures', 'Algorithms'],
        'preferred_skills': ['React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Microservices', 'Testing']
    },
    'data_scientist': {
        'name': 'Data Scientist',
        'required_skills': ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Pandas', 'NumPy', 'Data Visualization'],
        'preferred_skills': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'Power BI', 'Apache Spark', 'Deep Learning', 'NLP']
    },
    'marketing': {
        'name': 'Marketing',
        'required_skills': ['Digital Marketing', 'SEO', 'Content Marketing', 'Social Media', 'Analytics', 'Campaign Management'],
        'preferred_skills': ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Marketing Automation', 'Copywriting', 'Branding']
    },
    'finance': {
        'name': 'Finance',
        'required_skills': ['Financial Analysis', 'Excel', 'Accounting', 'Financial Modeling', 'Budgeting', 'Reporting'],
        'preferred_skills': ['SAP', 'QuickBooks', 'Bloomberg', 'Risk Management', 'Investment Analysis', 'SQL']
    },
    'business_analyst': {
        'name': 'Business Analyst',
        'required_skills': ['Business Analysis', 'Requirements Gathering', 'SQL', 'Excel', 'Data Analysis', 'Process Modeling'],
        'preferred_skills': ['Agile', 'Scrum', 'JIRA', 'Tableau', 'Power BI', 'UML', 'Stakeholder Management']
    }
}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def extract_text_from_pdf(file_path):
    """Extract text from PDF file"""
    text = ""
    try:
        with open(file_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text()
    except Exception as e:
        print(f"Error extracting PDF: {e}")
    return text

def extract_text_from_docx(file_path):
    """Extract text from DOCX file"""
    text = ""
    try:
        doc = docx.Document(file_path)
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
    except Exception as e:
        print(f"Error extracting DOCX: {e}")
    return text

def extract_text_from_txt(file_path):
    """Extract text from TXT file"""
    text = ""
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            text = file.read()
    except Exception as e:
        print(f"Error extracting TXT: {e}")
    return text

def extract_text_from_file(file_path, filename):
    """Extract text based on file type"""
    extension = filename.rsplit('.', 1)[1].lower()
    
    if extension == 'pdf':
        return extract_text_from_pdf(file_path)
    elif extension == 'docx':
        return extract_text_from_docx(file_path)
    elif extension == 'txt':
        return extract_text_from_txt(file_path)
    else:
        return ""

def clean_text_for_ml(text):
    """Clean text for ML prediction (simple preprocessing)"""
    if not text:
        return ""
    
    # Lowercase
    text = text.lower()
    
    # Remove URLs
    text = re.sub(r'http\S+|www\S+', '', text)
    
    # Remove emails
    text = re.sub(r'\S+@\S+', '', text)
    
    # Remove phone numbers
    text = re.sub(r'\+?\d[\d\s\-\(\)]+', '', text)
    
    # Keep only letters, numbers, spaces
    text = re.sub(r'[^a-z0-9\s]', ' ', text)
    
    # Remove extra spaces
    text = ' '.join(text.split())
    
    return text

def predict_job_roles_ml(cv_text, top_n=5):
    """Predict job roles using ML model"""
    
    if not ML_MODEL_LOADED:
        return None
    
    try:
        # Clean text
        cleaned_text = clean_text_for_ml(cv_text)
        
        # Vectorize
        cv_vector = ml_vectorizer.transform([cleaned_text])
        
        # Predict
        if hasattr(ml_model, 'predict_proba'):
            probabilities = ml_model.predict_proba(cv_vector)[0]
            classes = ml_model.classes_
            
            # Get top N predictions
            top_indices = np.argsort(probabilities)[-top_n:][::-1]
            
            predictions = []
            for idx in top_indices:
                predictions.append({
                    'role': classes[idx],
                    'confidence': round(probabilities[idx] * 100, 2)
                })
        else:
            # For models without predict_proba
            prediction = ml_model.predict(cv_vector)[0]
            predictions = [{'role': prediction, 'confidence': 100.0}]
        
        return predictions
        
    except Exception as e:
        print(f"Error in ML prediction: {e}")
        return None

def analyze_cv_with_gemini(cv_text, job_role):
    """Analyze CV using Gemini AI"""
    try:
        model = genai.GenerativeModel('models/gemini-2.5-flash')
        
        role_info = JOB_ROLES.get(job_role, JOB_ROLES['software_engineer'])
        
        prompt = f"""You are an expert CV/Resume analyzer and career counselor. Analyze the following CV for a {role_info['name']} position.

CV Content:
{cv_text}

Target Role: {role_info['name']}
Required Skills: {', '.join(role_info['required_skills'])}
Preferred Skills: {', '.join(role_info['preferred_skills'])}

Please provide a comprehensive analysis in the following JSON format (respond ONLY with valid JSON, no markdown):

{{
    "overall_score": <number 0-100>,
    "overall_feedback": "<brief overall assessment>",
    "estimated_match_percentage": <number 0-100>,
    "sections": {{
        "contact_information": {{
            "category": "Contact Information",
            "score": <number 0-100>,
            "feedback": ["<specific feedback point 1>", "<specific feedback point 2>"]
        }},
        "professional_summary": {{
            "category": "Professional Summary",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "skills_match": {{
            "category": "Skills Match",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "experience": {{
            "category": "Experience",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "education": {{
            "category": "Education",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "projects": {{
            "category": "Projects",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "achievements": {{
            "category": "Achievements",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }},
        "ats_readiness": {{
            "category": "ATS Readiness",
            "score": <number 0-100>,
            "feedback": ["<specific feedback>"]
        }}
    }},
    "found_skills": ["<skill1>", "<skill2>"],
    "missing_skills": ["<skill1>", "<skill2>"],
    "strengths": ["<strength1>", "<strength2>", "<strength3>"],
    "weaknesses": ["<weakness1>", "<weakness2>", "<weakness3>"],
    "red_flags": ["<red_flag1>", "<red_flag2>"],
    "competitive_advantage": "<what makes this candidate stand out>",
    "improvement_recommendations": {{
        "immediate": ["<action1>", "<action2>"],
        "short_term": ["<action1>", "<action2>"],
        "long_term": ["<action1>", "<action2>"]
    }}
}}

Be specific, honest, and constructive. Base your analysis on the actual CV content."""

        response = model.generate_content(prompt)
        response_text = response.text.strip()
        
        # Remove markdown code blocks if present
        response_text = re.sub(r'```json\s*', '', response_text)
        response_text = re.sub(r'```\s*$', '', response_text)
        response_text = response_text.strip()
        
        # Parse JSON
        analysis = json.loads(response_text)
        return analysis
        
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}")
        print(f"Response text: {response_text[:500]}")
        return None
    except Exception as e:
        print(f"Gemini API error: {e}")
        return None

@app.route('/api/get-job-roles', methods=['GET'])
def get_job_roles():
    """Return available job roles"""
    roles = [info['name'] for info in JOB_ROLES.values()]
    role_keys = list(JOB_ROLES.keys())
    
    return jsonify({
        'status': 'success',
        'data': {
            'roles': roles,
            'role_keys': role_keys
        }
    })

@app.route('/api/analyze-cv', methods=['POST'])
def analyze_cv():
    """Main endpoint to analyze CV with Gemini AI"""
    try:
        # Check if file is present
        if 'cv_file' not in request.files:
            return jsonify({'status': 'error', 'error': 'No file uploaded'}), 400
        
        file = request.files['cv_file']
        job_role = request.form.get('job_role', 'software_engineer')
        
        # Validate file
        if file.filename == '':
            return jsonify({'status': 'error', 'error': 'No file selected'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'status': 'error', 'error': 'Invalid file type. Use PDF, DOCX, or TXT'}), 400
        
        # Save file
        filename = secure_filename(file.filename)
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        unique_filename = f"{timestamp}_{filename}"
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
        file.save(file_path)
        
        # Extract text
        cv_text = extract_text_from_file(file_path, filename)
        
        if not cv_text or len(cv_text.strip()) < 50:
            os.remove(file_path)
            return jsonify({'status': 'error', 'error': 'Could not extract text from file or content too short'}), 400
        
        # Get word count
        word_count = len(cv_text.split())
        
        # Analyze with Gemini
        analysis_result = analyze_cv_with_gemini(cv_text, job_role)
        
        # Get ML predictions (optional, doesn't fail if ML not loaded)
        ml_predictions = None
        if ML_MODEL_LOADED:
            ml_predictions = predict_job_roles_ml(cv_text, top_n=5)
        
        # Clean up file
        os.remove(file_path)
        
        if not analysis_result:
            return jsonify({'status': 'error', 'error': 'AI analysis failed. Please try again.'}), 500
        
        # Add metadata
        analysis_result['job_role'] = job_role
        analysis_result['file_info'] = {
            'filename': filename,
            'word_count': word_count
        }
        
        # Add ML predictions if available
        if ml_predictions:
            analysis_result['ml_predictions'] = {
                'top_roles': ml_predictions,
                'model_accuracy': round(ml_model_info['test_accuracy'] * 100, 2),
                'model_name': ml_model_info['model_name']
            }
        
        return jsonify({
            'status': 'success',
            'data': analysis_result
        })
        
    except Exception as e:
        print(f"Error in analyze_cv: {e}")
        return jsonify({'status': 'error', 'error': f'Server error: {str(e)}'}), 500

@app.route('/api/predict-job-role', methods=['POST'])
def predict_job_role():
    """Predict job role using ML model (standalone endpoint)"""
    
    if not ML_MODEL_LOADED:
        return jsonify({
            'status': 'error',
            'error': 'ML model not loaded. Please train the model first.'
        }), 500
    
    try:
        # Get data from request
        data = request.get_json()
        
        if not data:
            return jsonify({
                'status': 'error',
                'error': 'No data provided'
            }), 400
        
        resume_text = data.get('resume_text', '')
        
        if not resume_text:
            return jsonify({
                'status': 'error',
                'error': 'No resume text provided'
            }), 400
        
        # Get predictions
        predictions = predict_job_roles_ml(resume_text, top_n=5)
        
        if predictions is None:
            return jsonify({
                'status': 'error',
                'error': 'Prediction failed'
            }), 500
        
        return jsonify({
            'status': 'success',
            'predictions': predictions,
            'model_info': {
                'model_name': ml_model_info['model_name'],
                'accuracy': round(ml_model_info['test_accuracy'] * 100, 2),
                'num_classes': ml_model_info['num_classes']
            }
        })
        
    except Exception as e:
        print(f"Error in predict_job_role: {e}")
        return jsonify({
            'status': 'error',
            'error': str(e)
        }), 500
    
    

@app.route('/api/model-info', methods=['GET'])
def get_model_info():
    """Get ML model information"""
    
    if not ML_MODEL_LOADED:
        return jsonify({
            'status': 'error',
            'error': 'ML model not loaded',
            'ml_available': False
        })
    
    return jsonify({
        'status': 'success',
        'ml_available': True,
        'model_info': {
            'model_name': ml_model_info['model_name'],
            'model_type': ml_model_info['model_type'],
            'train_accuracy': round(ml_model_info['train_accuracy'] * 100, 2),
            'test_accuracy': round(ml_model_info['test_accuracy'] * 100, 2),
            'num_features': ml_model_info['num_features'],
            'num_classes': ml_model_info['num_classes'],
            'classes': ml_model_info['classes']
        }
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'success',
        'message': 'CV Analyzer API is running',
        'timestamp': datetime.now().isoformat(),
        'ml_model_loaded': ML_MODEL_LOADED,
        'gemini_configured': bool(GEMINI_API_KEY)
    })

if __name__ == '__main__':
    print("=" * 60)
    print("🚀 CV Analyzer API Server Starting...")
    print("=" * 60)
    print(f"Server: http://localhost:5000")
    print(f"Upload folder: {UPLOAD_FOLDER}")
    print(f"Gemini AI: {'✅ Configured' if GEMINI_API_KEY else '❌ Not configured'}")
    print(f"ML Model: {'✅ Loaded' if ML_MODEL_LOADED else '❌ Not loaded'}")
    print(f"Job Roles: {len(JOB_ROLES)}")
    print("=" * 60)
    print("\nAvailable Endpoints:")
    print("  GET  /api/health")
    print("  GET  /api/get-job-roles")
    print("  GET  /api/model-info")
    print("  POST /api/analyze-cv")
    print("  POST /api/predict-job-role")
    print("=" * 60)
    app.run(debug=True, port=5000, host='0.0.0.0')