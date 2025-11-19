import requests
import json

BASE_URL = "http://localhost:5000"

def test_health_check():
    """Test health check endpoint"""
    print("\n" + "="*60)
    print("Testing Health Check Endpoint")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/api/health")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_get_job_roles():
    """Test get job roles endpoint"""
    print("\n" + "="*60)
    print("Testing Get Job Roles Endpoint")
    print("="*60)
    
    try:
        response = requests.get(f"{BASE_URL}/api/get-job-roles")
        print(f"Status Code: {response.status_code}")
        data = response.json()
        print(f"Available Roles: {data['data']['roles']}")
        print(f"Role Keys: {data['data']['role_keys']}")
        return response.status_code == 200
    except Exception as e:
        print(f"Error: {e}")
        return False

def test_analyze_cv(file_path, job_role='software_engineer'):
    """Test CV analysis endpoint"""
    print("\n" + "="*60)
    print(f"Testing CV Analysis Endpoint")
    print(f"File: {file_path}")
    print(f"Job Role: {job_role}")
    print("="*60)
    
    try:
        with open(file_path, 'rb') as file:
            files = {'cv_file': file}
            data = {'job_role': job_role}
            
            print("Uploading and analyzing... (this may take 15-30 seconds)")
            response = requests.post(
                f"{BASE_URL}/api/analyze-cv",
                files=files,
                data=data
            )
            
            print(f"Status Code: {response.status_code}")
            
            if response.status_code == 200:
                result = response.json()
                print("\n" + "-"*60)
                print("ANALYSIS RESULTS")
                print("-"*60)
                print(f"Overall Score: {result['data']['overall_score']}%")
                print(f"Match Percentage: {result['data']['estimated_match_percentage']}%")
                print(f"Overall Feedback: {result['data']['overall_feedback']}")
                print(f"\nFound Skills: {len(result['data']['found_skills'])}")
                print(f"Missing Skills: {len(result['data']['missing_skills'])}")
                print(f"\nSection Scores:")
                for section_name, section_data in result['data']['sections'].items():
                    print(f"  - {section_data['category']}: {section_data['score']}%")
                print("-"*60)
            else:
                print(f"Error Response: {response.json()}")
            
            return response.status_code == 200
    except FileNotFoundError:
        print(f"Error: File not found: {file_path}")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

def main():
    print("="*60)
    print("CV ANALYZER API TEST SUITE")
    print("="*60)
    print("\nMake sure the Flask backend is running on localhost:5000")
    input("Press Enter to start tests...")
    
    results = []
    
    # Test 1: Health Check
    results.append(("Health Check", test_health_check()))
    
    # Test 2: Get Job Roles
    results.append(("Get Job Roles", test_get_job_roles()))
    
    # Test 3: Analyze CV (you need to provide a test file)
    print("\n" + "="*60)
    print("To test CV analysis, you need a test file.")
    file_path = input("Enter path to test CV file (or press Enter to skip): ").strip()
    
    if file_path:
        job_role = input("Enter job role (default: software_engineer): ").strip() or 'software_engineer'
        results.append(("CV Analysis", test_analyze_cv(file_path, job_role)))
    else:
        print("Skipping CV analysis test")
    
    # Summary
    print("\n" + "="*60)
    print("TEST SUMMARY")
    print("="*60)
    for test_name, passed in results:
        status = "✓ PASSED" if passed else "✗ FAILED"
        print(f"{test_name}: {status}")
    print("="*60)

if __name__ == "__main__":
    main()