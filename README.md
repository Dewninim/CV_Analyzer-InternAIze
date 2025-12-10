# CV_Analyzer-InternAIze - AI-Powered CV Analysis & Career Guidance Platform

![InternAIze Logo](./public/logo-icon%20(2).png)

> **Empowering students and fresh graduates to overcome internship rejections through AI-powered CV analysis and personalized career guidance.**

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [ML Model Documentation](#ml-model-documentation)
- [API Documentation](#api-documentation)
- [License](#license)

---

## 🎯 About the Project

**InternAIze** is a comprehensive web-based application designed to help students and fresh graduates understand internship rejection reasons and improve their applications through AI-powered analysis and personalized recommendations.

### Project Details
- **Course:** CCS3361 – TCC2
- **Project Type:** Software-Based
- **Institution:** SLTC Research University
- **GitHub:** https://github.com/Dewninim/CV_Analyzer-InternAIze

---

## 🔍 Problem Statement

Students and fresh graduates often struggle to understand the reasons behind internship rejections. These challenges stem from:

- ❌ Mismatched skills between CV and job requirements
- ❌ Poor resume presentation and formatting
- ❌ Lack of industry-specific keywords
- ❌ Unclear career guidance and improvement paths
- ❌ No actionable feedback from recruiters

**Current Gap:** No platform offers a data-driven, AI-powered solution to analyze internship rejections and guide applicants towards improvement.

**Our Solution:** InternAIze bridges this gap with intelligent CV analysis, job matching, and personalized improvement recommendations.

---

## ✨ Key Features

### 1. **AI-Powered CV Analysis**
- Upload CV in PDF, DOCX, or TXT format
- Get detailed section-wise analysis (Skills, Experience, Education)
- Receive overall score and role-fit percentage
- Identify strengths and weaknesses using Google Gemini AI

### 2. **ML-Based Job Matching**
- Predict top 5 best-fit job roles based on CV content
- Confidence scores for each prediction
- Discover alternative career opportunities
- 75-85% prediction accuracy using Logistic Regression

### 3. **Personalized Recommendations**
- Skills gap analysis (Found vs Missing skills)
- Immediate, short-term, and long-term improvement plans
- Red flags detection and competitive advantage identification
- Industry-specific keyword suggestions

### 4. **Interactive Quiz System**
- Career assessment quiz
- Personality-based role recommendations
- Track quiz history and results

### 5. **User Dashboard**
- Track analysis history
- Monitor improvement progress
- Save and compare multiple CV versions
- User authentication with JWT

### 6. **Career Resources**
- Course recommendations for skill development
- Resume templates and best practices
- Career guidance chatbot

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React.js 18.x with Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js 18.x
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT + bcrypt
- **File Upload:** Multer
- **Password Hashing:** bcryptjs

### Machine Learning
- **Language:** Python 3.9+
- **ML Libraries:** 
  - scikit-learn (Model Training)
  - pandas (Data Processing)
  - numpy (Numerical Operations)
  - nltk (Text Processing)
- **Model:** Logistic Regression (75-85% accuracy)
- **Feature Extraction:** TF-IDF Vectorization

### AI Integration
- **API:** Google Gemini AI
- **Purpose:** Natural language CV analysis and feedback generation

### Development Tools
- **Version Control:** Git & GitHub
- **Package Manager:** npm
- **Build Tool:** Vite

---

## 📁 Project Structure

```
CV_Analyzer-InternAIze/
├── backend/                     # ML Training Scripts & Models
│   ├── Resume.csv              # Training dataset (1000+ records)
│   ├── Resume.xlsx             # Excel version of dataset
│   ├── Resume_Preprocessed.csv # Cleaned dataset
│   ├── best_model.pkl          # Trained Logistic Regression model
│   ├── X_train.pkl             # Training features
│   ├── X_test.pkl              # Testing features
│   ├── model_info.pkl          # Model metadata
│   ├── app.py                  # Flask API for ML predictions
│   ├── step1_eda.py           # Exploratory Data Analysis
│   ├── step2_preprocessing.py  # Data cleaning & preprocessing
│   ├── step3_feature_extraction.py  # TF-IDF feature extraction
│   ├── step4_train_model.py    # Model training & selection
│   ├── step5_predict.py        # Prediction testing
│   ├── requirements.txt        # Python dependencies
│   └── requirements_ml.txt     # ML-specific dependencies
│
├── backend-userdb/              # User Authentication Backend
│   ├── models/
│   │   └── User.js             # User schema
│   ├── hashPasswords.js        # Password hashing utility
│   ├── server.js               # Express server
│   └── package.json            # Node dependencies
│
├── backendV/                    # Backend Version (Alternative)
│   ├── app.py                  # Flask application
│   ├── responses.json          # Response templates
│   ├── templates/              # HTML templates
│   └── venv/                   # Python virtual environment
│
├── frontend/                    # React Frontend (Vite)
│   └── (frontend build files)
│
├── src/                         # React Source Files
│   ├── components/
│   │   ├── ChatBot.jsx         # AI Chatbot component
│   │   ├── ChatBot.js          # Chatbot logic
│   │   └── ChatBot.css         # Chatbot styling
│   ├── data/
│   │   └── questions.js        # Quiz questions data
│   ├── CareerBoostHome.jsx     # Career boost page
│   ├── Homepage.jsx            # Home page
│   ├── UploadCV.jsx            # CV upload & analysis page
│   ├── Profile.jsx             # User profile page
│   ├── Quiz.jsx                # Career quiz page
│   ├── index.jsx               # React entry point
│   └── index.css               # Global styles
│
├── public/
│   └── icons/                  # Social media & UI icons
│       ├── Be.png
│       ├── facebook.png
│       ├── instagram.png
│       ├── linkedin.png
│       ├── twitter.png
│       └── pngegg.png
│
├── node_modules/                # Node dependencies (ignored)
├── venv/                        # Python virtual environment (ignored)
├── .gitignore                   # Git ignore rules
├── package.json                 # Node project configuration
├── package-lock.json            # (ignored in Git)
├── requirements.txt             # Python dependencies
├── responses.json               # Response data
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js               # Vite configuration
├── index.html                   # HTML entry point
└── README.md                    # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)
- MongoDB (v6.0 or higher)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Dewninim/CV_Analyzer-InternAIze.git
cd CV_Analyzer-InternAIze
```

### 2. Setup Environment Variables

Create `.env` file in root directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/internalize

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# Google Gemini AI API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Backend Ports
PORT=5000
ML_PORT=5001
```

**⚠️ IMPORTANT:** Never commit your `.env` file to Git! It's already in `.gitignore`.

### 3. Setup User Authentication Backend
```bash
cd backend-userdb
npm install
node server.js
```

Server runs on: http://localhost:5000

### 4. Setup ML Backend
```bash
cd ../backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Download NLTK data
python download_nltk_data.py

# Start Flask server
python app.py
```

ML API runs on: http://localhost:5001

### 5. Setup Frontend
```bash
cd ..
npm install
npm run dev
```

Frontend runs on: http://localhost:5173 (Vite default port)

### 6. Access Application
- **Frontend:** http://localhost:5173
- **Auth Backend:** http://localhost:5000
- **ML Backend:** http://localhost:5001

---

## 📖 Usage Guide

### For Users

#### 1. **Register/Login**
1. Navigate to homepage
2. Click "Sign Up" or "Login"
3. Create account or login with credentials

#### 2. **Upload & Analyze CV**
1. Go to "Upload CV" page
2. Click "Choose File" and upload your CV (PDF/DOCX/TXT, max 5MB)
3. Select target job role from dropdown
4. Click "Analyze with AI + ML"
5. Wait 15-30 seconds for comprehensive analysis

#### 3. **View Results**
- **Overall Score:** 0-100 rating of your CV
- **ML Predictions:** Top 5 best-fit job roles with confidence scores
- **Skills Analysis:** Found skills vs Missing skills
- **Sections Score:** Individual ratings for each CV section
- **Recommendations:** Immediate, short-term, and long-term actions
- **Red Flags:** Issues detected in your CV
- **Competitive Advantages:** Your strong points

#### 4. **Take Career Quiz**
1. Navigate to Quiz page
2. Answer personality and career-focused questions
3. Get role recommendations based on responses

#### 5. **Track Progress**
- View analysis history in profile
- Compare multiple CV versions
- Monitor skill development over time

---

## 🤖 ML Model Documentation

### Training Pipeline

#### Step 1: Exploratory Data Analysis (EDA)
```bash
cd backend
python step1_eda.py
```

**Purpose:**
- Analyze dataset distribution
- Check for missing values and duplicates
- Visualize category distribution
- Identify data quality issues

**Output:** `eda_report.png`, `eda_summary.txt`

#### Step 2: Data Preprocessing
```bash
python step2_preprocessing.py
```

**Purpose:**
- Remove NULL values and exact duplicates
- Filter categories with <2 samples
- Clean text (lowercase, remove URLs/emails/special chars)
- Remove stopwords (except technical terms like Python, Java)
- Apply lemmatization

**Output:** `Resume_Preprocessed.csv` (~900 records)

#### Step 3: Feature Extraction
```bash
python step3_feature_extraction.py
```

**Purpose:**
- Apply TF-IDF Vectorization
- Extract meaningful features from text

**Parameters:**
- max_features: 3000
- min_df: 2 (minimum document frequency)
- max_df: 0.8 (maximum document frequency)
- ngram_range: (1, 2) (unigrams and bigrams)

**Output:** 
- `tfidf_vectorizer.pkl`
- `X_train.pkl`, `X_test.pkl`
- `y_train.pkl`, `y_test.pkl`

#### Step 4: Model Training
```bash
python step4_train_model.py
```

**Models Trained:**
1. Naive Bayes
2. **Logistic Regression** ✅ (Selected - Best Performance)
3. Random Forest
4. Linear SVM

**Selection Criteria:** Test accuracy

**Output:** 
- `best_model.pkl` (Logistic Regression)
- `model_info.pkl` (metadata)
- `training_results.txt` (comparison report)

#### Step 5: Testing & Deployment
```bash
python step5_predict.py
```

**Purpose:**
- Test predictions on sample resumes
- Validate model performance
- Prepare for Flask API deployment

### Model Performance
- **Algorithm:** Logistic Regression
- **Accuracy:** 75-85%
- **Features:** 3000 TF-IDF features
- **Classes:** 20+ job categories
- **Training Data:** 900+ preprocessed resumes
- **Train-Test Split:** 80-20

---

## 📡 API Documentation

### User Authentication Backend (Port 5000)

#### Register User
```http
POST http://localhost:5000/api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here"
}
```

#### Login User
```http
POST http://localhost:5000/api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### ML Prediction Backend (Port 5001)

#### Health Check
```http
GET http://localhost:5001/health
```

**Response:**
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_name": "Logistic Regression",
  "accuracy": "82.5%"
}
```

#### Predict Job Category
```http
POST http://localhost:5001/api/predict
Content-Type: application/json

{
  "resume_text": "I am a software engineer with 5 years of experience in Python, JavaScript, React, Node.js..."
}
```

**Response:**
```json
{
  "success": true,
  "predicted_category": "Software Engineer",
  "confidence": "85.23%",
  "top_predictions": [
    {
      "category": "Software Engineer",
      "confidence": "85.23%"
    },
    {
      "category": "Data Scientist",
      "confidence": "78.45%"
    },
    {
      "category": "DevOps Engineer",
      "confidence": "72.18%"
    },
    {
      "category": "Full Stack Developer",
      "confidence": "68.92%"
    },
    {
      "category": "Machine Learning Engineer",
      "confidence": "65.37%"
    }
  ],
  "processing_time": "0.15s"
}
```



#### Upload & Analyze CV (Combined AI + ML)
```http
POST http://localhost:5000/api/analyze-cv
Content-Type: multipart/form-data
Authorization: Bearer <jwt_token>

{
  "cv_file": <file>,
  "job_role": "Software Engineer"
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "overall_score": 78.5,
    "predicted_category": "Software Engineer",
    "confidence": "85.23%",
    "sections": {
      "skills": 82,
      "experience": 75,
      "education": 80,
      "projects": 78
    },
    "found_skills": ["Python", "React", "Node.js", "MongoDB", "Git"],
    "missing_skills": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    "ml_predictions": {
      "top_roles": [
        {"role": "Software Engineer", "confidence": 85.23},
        {"role": "Data Scientist", "confidence": 78.45}
      ]
    },
    "recommendations": {
      "immediate": ["Add Docker to skills", "Include AWS certification"],
      "short_term": ["Build 2-3 Docker projects", "Complete AWS course"],
      "long_term": ["Get AWS Solutions Architect certification"]
    },
    "red_flags": ["Missing contact information", "No LinkedIn profile"],
    "competitive_advantages": ["Strong Python skills", "Open-source contributions"]
  }
}
```

---

## 🎯 Project Objectives

1. ✅ Develop a web platform to analyze internship application rejections
2. ✅ Provide personalized feedback using AI (Google Gemini) and ML (Logistic Regression)
3. ✅ Help users identify skills gaps and improvement areas
4. ✅ Enable CV analysis with 75-85% job role prediction accuracy
5. ✅ Create intuitive user interface with React and Tailwind CSS
6. ✅ Implement secure authentication with JWT
7. ⏳ Deploy to cloud platform (AWS/Heroku)

---

## 📊 Expected Outcomes

- ✅ Fully functional web application for CV analysis
- ✅ AI-powered module detecting rejection reasons
- ✅ ML model predicting job roles with 75-85% accuracy
- ✅ Personalized recommendation engine
- ✅ User authentication and profile management
- ⏳ Cloud deployment with scalability
- ⏳ Measurable improvement in user internship success rate

---

## 🔒 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Environment variables for sensitive data
- ✅ `.gitignore` protecting API keys and credentials
- ✅ File upload validation and size limits
- ✅ CORS configuration for API security

---

## 📚 References

1. **scikit-learn Documentation** - https://scikit-learn.org/
2. **React.js Documentation** - https://react.dev/
3. **MongoDB Documentation** - https://www.mongodb.com/docs/
4. **Flask Documentation** - https://flask.palletsprojects.com/
5. **Vite Documentation** - https://vitejs.dev/
6. **Tailwind CSS** - https://tailwindcss.com/
7. **Google Gemini AI** - https://ai.google.dev/
8. **Survey conducted among undergraduates** (2025)

---

## 📝 License

This project is developed as part of academic coursework at SLTC Research University.

**Copyright © 2025 Team Devvengers. All rights reserved.**

---


## 🤝 Contributing

This is an academic project. For any queries, suggestions, or collaboration:
- Open an issue on GitHub
- Contact team members via email
- Fork the repository and submit pull requests

---


## 🚀 Future Enhancements

- [ ] Mobile application (React Native)
- [ ] Real-time mock interview with AI
- [ ] LinkedIn profile integration
- [ ] Resume builder with templates
- [ ] Mentorship matching system
- [ ] Company-specific CV optimization
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

---


## 🙏 Acknowledgments

- **SLTC Research University** faculty for guidance and support
- **Survey participants** for valuable feedback
- **Open-source community** for amazing tools and libraries
- **Google** for Gemini AI API access

---


## 📞 Support

For technical issues or questions:
- **GitHub Issues:** https://github.com/Dewninim/CV_Analyzer-InternAIze/issues


---


**Built with ❤️ by Team Devvengers**

*Empowering the next generation of professionals, one CV at a time.*

---


## 🏆 Project Status

**Current Version:** 1.0.0 Beta  
**Status:** 🔄 In Active Development  
**Last Updated:** December 2025

**Star ⭐ this repository if you find it helpful!**
