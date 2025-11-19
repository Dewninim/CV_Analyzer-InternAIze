"""
Test script for ML API endpoints
"""

import requests
import json

BASE_URL = "http://localhost:5000"

def test_health():
    """Test health endpoint"""
    print("\n" + "="*60)
    print("TEST 1: Health Check")
    print("="*60)
    
    response = requests.get(f"{BASE_URL}/api/health")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    return response.status_code == 200

def test_model_info():
    """Test model info endpoint"""
    print("\n" + "="*60)
    print("TEST 2: Model Info")
    print("="*60)
    
    response = requests.get(f"{BASE_URL}/api/model-info")
    print(f"Status Code: {response.status_code}")
    print(f"Response: {json.dumps(response.json(), indent=2)}")
    
    return response.status_code == 200

def test_predict_job_role():
    """Test job role prediction"""
    print("\n" + "="*60)
    print("TEST 3: Job Role Prediction")
    print("="*60)
    
    # Sample resume text
    resume_text = """
    python developer machine learning data science tensorflow keras
    pandas numpy scikit learn deep learning neural network artificial
    intelligence natural language processing computer vision flask django
    rest api git github docker aws cloud computing postgresql mongodb
    """
    
    data = {
        "resume_text": resume_text
    }
    
    print(f"\nSending resume text (length: {len(resume_text)} chars)...")
    
    response = requests.post(
        f"{BASE_URL}/api/predict-job-role",
        json=data,
        headers={'Content-Type': 'application/json'}
    )
    
    print(f"Status Code: {response.status_code}")
    
    if response.status_code == 200:
        result = response.json()
        print(f"\n{'='*60}")
        print("PREDICTIONS:")
        print(f"{'='*60}")
        
        if result['status'] == 'success':
            print(f"\nModel: {result['model_info']['model_name']}")
            print(f"Accuracy: {result['model_info']['accuracy']}%")
            print(f"\nTop 5 Predicted Roles:")
            print(f"{'='*60}")
            
            for i, pred in enumerate(result['predictions'], 1):
                bar = "█" * int(pred['confidence'] / 2)
                print(f"{i}. {pred['role']:<30} {pred['confidence']:>6.2f}% {bar}")
            
            print(f"{'='*60}")
        else:
            print(f"Error: {result.get('error', 'Unknown error')}")
    else:
        print(f"Error Response: {response.text}")
    
    return response.status_code == 200

def test_different_resumes():
    """Test with different resume types"""
    print("\n" + "="*60)
    print("TEST 4: Testing Different Resume Types")
    print("="*60)
    
    test_resumes = {
        "Data Scientist": """
        data scientist python r machine learning statistics pandas numpy
        matplotlib seaborn scikit learn tensorflow keras deep learning
        neural networks data visualization tableau power bi sql postgresql
        """,
        
        "Java Developer": """
        java developer spring boot microservices rest api hibernate jpa
        mysql postgresql maven gradle docker kubernetes jenkins ci cd
        junit mockito git agile scrum
        """,
        
        "DevOps Engineer": """
        devops engineer docker kubernetes aws ec2 s3 terraform ansible
        jenkins gitlab ci cd linux bash python automation monitoring
        prometheus grafana elk stack
        """,
        
        "Web Developer": """
        web developer html css javascript react nodejs express mongodb
        responsive design rest api git github bootstrap tailwind webpack
        """
    }
    
    results = []
    
    for role_name, resume in test_resumes.items():
        print(f"\n📄 Testing: {role_name}")
        print("-" * 60)
        
        data = {"resume_text": resume}
        response = requests.post(
            f"{BASE_URL}/api/predict-job-role",
            json=data
        )
        
        if response.status_code == 200:
            result = response.json()
            if result['status'] == 'success':
                top_pred = result['predictions'][0]
                print(f"✅ Top Prediction: {top_pred['role']} ({top_pred['confidence']:.2f}%)")
                results.append(True)
            else:
                print(f"❌ Error: {result.get('error')}")
                results.append(False)
        else:
            print(f"❌ HTTP Error: {response.status_code}")
            results.append(False)
    
    return all(results)

def main():
    """Run all tests"""
    print("\n" + "="*60)
    print("🧪 ML API TEST SUITE")
    print("="*60)
    print("\nMake sure the Flask server is running on localhost:5000")
    print("Run: python app.py")
    input("\nPress Enter to start tests...")
    
    results = {}
    
    # Run tests
    try:
        results['Health Check'] = test_health()
    except Exception as e:
        print(f"❌ Health check failed: {e}")
        results['Health Check'] = False
    
    try:
        results['Model Info'] = test_model_info()
    except Exception as e:
        print(f"❌ Model info failed: {e}")
        results['Model Info'] = False
    
    try:
        results['Job Role Prediction'] = test_predict_job_role()
    except Exception as e:
        print(f"❌ Prediction failed: {e}")
        results['Job Role Prediction'] = False
    
    try:
        results['Different Resumes'] = test_different_resumes()
    except Exception as e:
        print(f"❌ Multiple resumes test failed: {e}")
        results['Different Resumes'] = False
    
    # Summary
    print("\n" + "="*60)
    print("📊 TEST SUMMARY")
    print("="*60)
    
    for test_name, passed in results.items():
        status = "✅ PASSED" if passed else "❌ FAILED"
        print(f"{test_name:<30} {status}")
    
    print("="*60)
    
    passed_count = sum(results.values())
    total_count = len(results)
    
    print(f"\nTotal: {passed_count}/{total_count} tests passed")
    
    if passed_count == total_count:
        print("\n🎉 All tests passed! Your ML API is working perfectly!")
    else:
        print("\n⚠️  Some tests failed. Check the errors above.")
    
    print("="*60)

if __name__ == "__main__":
    main()