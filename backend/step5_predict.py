"""
STEP 5: PREDICTION SCRIPT
Purpose: Test the trained model with new resumes
"""

import joblib
import numpy as np

print("="*80)
print("STEP 5: JOB ROLE PREDICTION")
print("="*80)

# Load model and vectorizer
print("\n1. Loading trained model...")
model = joblib.load('best_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')
model_info = joblib.load('model_info.pkl')

print(f"✅ Model: {model_info['model_name']}")
print(f"✅ Test Accuracy: {model_info['test_accuracy']*100:.2f}%")
print(f"✅ Number of classes: {model_info['num_classes']}")

def predict_job_role(resume_text, top_n=5):
    """
    Predict job role for a resume
    
    Args:
        resume_text: Resume text (already preprocessed)
        top_n: Number of top predictions to return
    
    Returns:
        List of (job_role, confidence) tuples
    """
    
    # Transform text
    resume_vector = vectorizer.transform([resume_text])
    
    # Get prediction probabilities
    if hasattr(model, 'predict_proba'):
        probabilities = model.predict_proba(resume_vector)[0]
        classes = model.classes_
        
        # Get top N predictions
        top_indices = np.argsort(probabilities)[-top_n:][::-1]
        
        predictions = []
        for idx in top_indices:
            predictions.append({
                'role': classes[idx],
                'confidence': round(probabilities[idx] * 100, 2)
            })
    else:
        # For models without predict_proba (like LinearSVC)
        prediction = model.predict(resume_vector)[0]
        predictions = [{'role': prediction, 'confidence': 100.0}]
    
    return predictions

# Test with sample resume
print("\n2. Testing with sample resume...")

sample_resume = """
python developer machine learning data science tensorflow 
keras pandas numpy scikit learn deep learning neural network 
artificial intelligence natural language processing computer vision 
flask django rest api git github docker aws cloud computing
"""

print(f"\n   Sample Resume:")
print(f"   {sample_resume[:200]}...")

predictions = predict_job_role(sample_resume, top_n=5)

print(f"\n   🎯 Top 5 Predicted Job Roles:")
print("   " + "="*60)
for i, pred in enumerate(predictions, 1):
    print(f"   {i}. {pred['role']:<40} {pred['confidence']:>6.2f}%")
print("   " + "="*60)

# Function to use in Flask API
def analyze_resume_ml(resume_text):
    """
    Main function to be called from Flask API
    Returns top 5 job role predictions
    """
    try:
        predictions = predict_job_role(resume_text, top_n=5)
        return {
            'status': 'success',
            'predictions': predictions,
            'model_accuracy': model_info['test_accuracy'] * 100
        }
    except Exception as e:
        return {
            'status': 'error',
            'message': str(e)
        }

# Test the Flask function
print("\n3. Testing Flask API function...")
result = analyze_resume_ml(sample_resume)

if result['status'] == 'success':
    print("✅ API function working correctly")
    print(f"\n   API Response:")
    print(f"   Status: {result['status']}")
    print(f"   Model Accuracy: {result['model_accuracy']:.2f}%")
    print(f"   Predictions: {len(result['predictions'])} roles")
else:
    print(f"❌ Error: {result['message']}")

# Interactive test
print("\n" + "="*80)
print("✅ PREDICTION SYSTEM READY!")
print("="*80)
print("\nYou can now integrate this into your Flask API:")
print("\n1. Copy step5_predict.py functions to your app.py")
print("2. Call analyze_resume_ml(resume_text) in your API endpoint")
print("3. Return predictions to frontend")

print("\n" + "="*80)
print("✅ ML PIPELINE COMPLETE!")
print("="*80)
print("\nGenerated Files:")
print("  ✅ tfidf_vectorizer.pkl     - Feature extractor")
print("  ✅ best_model.pkl            - Trained ML model")
print("  ✅ model_info.pkl            - Model metadata")
print("  ✅ training_results.txt      - Training report")
print("\nUsage:")
print("  from step5_predict import analyze_resume_ml")
print("  result = analyze_resume_ml(resume_text)")
print("="*80)