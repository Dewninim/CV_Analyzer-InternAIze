import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UploadCV = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [availableRoles, setAvailableRoles] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchJobRoles();
  }, []);

  const fetchJobRoles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/get-job-roles');
      const data = await response.json();
      if (data.status === 'success') {
        setAvailableRoles(data.data.roles);
        if (data.data.role_keys.length > 0) {
          setSelectedRole(data.data.role_keys[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching job roles:', error);
      setAvailableRoles(['Software Engineer', 'Data Scientist', 'Marketing', 'Finance', 'Business Analyst']);
      setSelectedRole('software_engineer');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError("");
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError("Please select a file to upload");
      return;
    }

    if (!selectedRole) {
      setError("Please select a job role");
      return;
    }

    setLoading(true);
    setError("");
    setAnalysisResult(null);

    try {
      const formData = new FormData();
      formData.append('cv_file', selectedFile);
      formData.append('job_role', selectedRole);

      const response = await fetch('http://localhost:5000/api/analyze-cv', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === 'success') {
        setAnalysisResult(data.data);
      } else {
        setError(data.error || 'Analysis failed');
      }
    } catch (error) {
      console.error('Error analyzing CV:', error);
      setError('Failed to connect to analysis service. Make sure the backend server is running on localhost:5000');
    } finally {
      setLoading(false);
    }
  };

  const formatRoleName = (role) => {
    return role.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 30) return 'from-green-500 to-green-600';
    if (confidence >= 20) return 'from-blue-500 to-blue-600';
    if (confidence >= 10) return 'from-yellow-500 to-yellow-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="flex items-center gap-2">
                <img 
                  src="/logo-icon (2).png" 
                  alt="InternAlze Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold">
                  <span className="text-gray-800">Intern</span>
                  <span className="text-green-500">Alze</span>
                </span>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="flex items-center gap-8">
              {/* CareerBoost Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  CareerBoost
                  <svg 
                    className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <button
                        onClick={() => {
                          navigate('/');
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Career Boost Home
                      </button>
                      <button
                        onClick={() => {
                          navigate('/upload');
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        CV Analysis
                      </button>
                      <button
                        onClick={() => {
                          navigate('/homepage');
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Mock Interview
                      </button>
                    </div>
                    {/* Overlay */}
                    <div 
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                  </>
                )}
              </div>

              {/* About Link */}
              <button
                onClick={() => navigate('/')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                About
              </button>
            </div>

            {/* Profile Icon */}
            <div 
              className="cursor-pointer"
              onClick={() => navigate('/profile')}
            >
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover ring-2 ring-green-200 hover:ring-green-300 transition-all"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ⚡ Stop Guessing. Start Getting Hired.
          </h2>
          <p className="text-gray-600 text-lg">
            Instant CV analysis + Role matching that actually works
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Join thousands improving their CVs with smart AI feedback
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Upload Your CV
                </h3>
                <div className="border-2 border-dashed border-green-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
                  <input
                    type="file"
                    accept=".docx,.pdf,.txt"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <div className="mb-4">
                    <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                  </div>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                    onClick={handleButtonClick}
                  >
                    Choose File
                  </button>
                  {selectedFile && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700 font-medium">
                        ✓ {selectedFile.name}
                      </p>
                      <p className="text-xs text-green-600">
                        {(selectedFile.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  )}
                  <p className="text-sm text-gray-500 mt-4">
                    Supports .pdf, .docx, and .txt files (max 16MB)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Select Target Role
                </h3>
                <div className="space-y-4">
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Choose a role...</option>
                    {availableRoles.map((role, index) => (
                      <option key={index} value={role.toLowerCase().replace(/\s+/g, '_')}>
                        {role}
                      </option>
                    ))}
                  </select>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">🎯 2-in-1 Career Boost</h4>
                    <p className="text-sm text-blue-700">
                      ✓ Fix your CV weaknesses instantly<br/>
                      ✓ Find roles that actually want YOUR skills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700">❌ {error}</p>
              </div>
            )}

            <div className="mt-8 text-center">
              <button
                onClick={handleAnalyze}
                disabled={loading || !selectedFile || !selectedRole}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    AI is analyzing your CV...
                  </div>
                ) : (
                  "🚀 Analyze with Real AI + ML"
                )}
              </button>
              {loading && (
                <p className="text-sm text-gray-500 mt-3">
                  This may take 15-30 seconds as AI reads your entire CV
                </p>
              )}
            </div>
          </div>

          {analysisResult && (
            <div className="space-y-6">
              
              {/* ML JOB PREDICTIONS */}
              {analysisResult.ml_predictions && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                          🎯 Your Best Career Matches
                        </h3>
                        <p className="text-green-100">
                          Discover which roles fit your skills perfectly
                        </p>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-sm opacity-90">Accuracy Rate</div>
                        <div className="text-3xl font-bold">
                          {analysisResult.ml_predictions.model_accuracy}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-semibold text-gray-800 mb-6">
                      📊 Top 5 Matching Roles
                    </h4>
                    
                    <div className="space-y-4">
                      {analysisResult.ml_predictions.top_roles.map((prediction, index) => (
                        <div key={index} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getConfidenceColor(prediction.confidence)} flex items-center justify-center text-white font-bold text-lg`}>
                                {index + 1}
                              </div>
                              <div>
                                <h5 className="font-bold text-gray-800 text-lg">
                                  {prediction.role}
                                </h5>
                                <p className="text-sm text-gray-500">
                                  Confidence Score
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-3xl font-bold ${getScoreColor(prediction.confidence)}`}>
                                {prediction.confidence}%
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`bg-gradient-to-r ${getConfidenceColor(prediction.confidence)} h-3 rounded-full transition-all duration-700`}
                              style={{ width: `${prediction.confidence}%` }}
                            ></div>
                          </div>
                          
                          {index === 0 && prediction.confidence >= 25 && (
                            <div className="mt-3 flex items-center gap-2 text-sm text-green-700 bg-green-50 p-2 rounded-lg">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              <span className="font-medium">Best Match - Strong alignment with your skills!</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-1">How to interpret:</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• <strong>30%+:</strong> Excellent match</li>
                            <li>• <strong>20-30%:</strong> Good match</li>
                            <li>• <strong>10-20%:</strong> Possible fit</li>
                            <li>• <strong>&lt;10%:</strong> Build more skills</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gemini Analysis */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">✨ Detailed CV Analysis</h3>
                      <p className="text-green-100 mb-3">
                        Role: {formatRoleName(analysisResult.job_role)}
                      </p>
                      {analysisResult.overall_feedback && (
                        <p className="text-green-50 text-sm italic">
                          "{analysisResult.overall_feedback}"
                        </p>
                      )}
                      {analysisResult.file_info && (
                        <p className="text-green-200 text-xs mt-2">
                          📄 {analysisResult.file_info.word_count} words • {analysisResult.file_info.filename}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-sm min-w-[140px]">
                        <div className="text-sm opacity-90 mb-1">Overall Score</div>
                        <div className="text-4xl font-bold">
                          {Math.round(analysisResult.overall_score)}%
                        </div>
                        <div className="text-sm opacity-90 mt-1">
                          {getScoreLabel(analysisResult.overall_score)}
                        </div>
                      </div>
                      {analysisResult.estimated_match_percentage && (
                        <div className="bg-white bg-opacity-20 rounded-2xl p-6 text-center backdrop-blur-sm min-w-[140px]">
                          <div className="text-sm opacity-90 mb-1">Role Match</div>
                          <div className="text-4xl font-bold">
                            {Math.round(analysisResult.estimated_match_percentage)}%
                          </div>
                          <div className="text-sm opacity-90 mt-1">
                            Fit Score
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section Scores */}
                <div className="p-8">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">
                    📊 Detailed Section Analysis
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(analysisResult.sections).map(([key, section]) => (
                      <div key={key} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-semibold text-gray-800 text-sm">
                            {section.category}
                          </h5>
                          <span className={`font-bold text-lg ${getScoreColor(section.score)}`}>
                            {Math.round(section.score)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div
                            className={`${getScoreBgColor(section.score)} h-2 rounded-full transition-all duration-700`}
                            style={{ width: `${section.score}%` }}
                          ></div>
                        </div>
                        <div className="space-y-2">
                          {section.feedback && section.feedback.slice(0, 2).map((feedback, idx) => (
                            <p key={idx} className="text-xs text-gray-600 leading-relaxed">
                              • {feedback}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Analysis */}
              {(analysisResult.found_skills || analysisResult.missing_skills) && (
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800">
                    🎯 Skills Analysis for {formatRoleName(analysisResult.job_role)}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {analysisResult.found_skills && analysisResult.found_skills.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <span className="text-xl">✓</span> Found Skills ({analysisResult.found_skills.length})
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.found_skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {analysisResult.missing_skills && analysisResult.missing_skills.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <span className="text-xl">✗</span> Missing Skills ({analysisResult.missing_skills.length})
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.missing_skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Strengths & Weaknesses */}
              {(analysisResult.strengths || analysisResult.weaknesses) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {analysisResult.strengths && analysisResult.strengths.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <h4 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                        <span className="text-2xl">💪</span> Strengths
                      </h4>
                      <ul className="space-y-3">
                        {analysisResult.strengths.map((strength, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-green-500 font-bold">✓</span>
                            <span className="text-gray-700 text-sm">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {analysisResult.weaknesses && analysisResult.weaknesses.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                      <h4 className="text-xl font-semibold mb-4 text-orange-700 flex items-center gap-2">
                        <span className="text-2xl">⚠️</span> Areas to Improve
                      </h4>
                      <ul className="space-y-3">
                        {analysisResult.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-orange-500 font-bold">!</span>
                            <span className="text-gray-700 text-sm">{weakness}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Improvement Recommendations */}
              {analysisResult.improvement_recommendations && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8">
                  <h4 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="text-2xl">💡</span> Personalized Improvement Plan
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    {analysisResult.improvement_recommendations.immediate && (
                      <div className="bg-white rounded-xl p-6">
                        <h5 className="font-semibold text-red-700 mb-3">🔥 Immediate Actions</h5>
                        <ul className="space-y-2">
                          {analysisResult.improvement_recommendations.immediate.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {analysisResult.improvement_recommendations.short_term && (
                      <div className="bg-white rounded-xl p-6">
                        <h5 className="font-semibold text-yellow-700 mb-3">📅 Short-term (1-3 months)</h5>
                        <ul className="space-y-2">
                          {analysisResult.improvement_recommendations.short_term.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {analysisResult.improvement_recommendations.long_term && (
                      <div className="bg-white rounded-xl p-6">
                        <h5 className="font-semibold text-blue-700 mb-3">🎯 Long-term (3-6+ months)</h5>
                        <ul className="space-y-2">
                          {analysisResult.improvement_recommendations.long_term.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Red Flags & Competitive Advantage */}
              {(analysisResult.red_flags || analysisResult.competitive_advantage) && (
                <div className="grid md:grid-cols-2 gap-6">
                  {analysisResult.red_flags && analysisResult.red_flags.length > 0 && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                      <h5 className ="font-semibold text-red-800 mb-3 flex items-center gap-2">
                        <span className="text-xl">🚩</span> Red Flags to Address
                      </h5>
                      <ul className="space-y-2">
                        {analysisResult.red_flags.map((flag, idx) => (
                          <li key={idx} className="text-sm text-red-700">• {flag}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {analysisResult.competitive_advantage && (
                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                      <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <span className="text-xl">🌟</span> Competitive Edge
                      </h5>
                      <p className="text-sm text-green-700">{analysisResult.competitive_advantage}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Analyze Another Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => {
                    setAnalysisResult(null);
                    setSelectedFile(null);
                    setError("");
                  }}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors"
                >
                  🔄 Analyze Another CV
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadCV;