"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { questionsData } from "./data/questions.js";



function shuffleArray(array) {
  if (!array || !Array.isArray(array)) return [];
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const industryParam = searchParams.get("industry");
  const positionParam = searchParams.get("position");

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(industryParam || "");
  const [selectedPosition, setSelectedPosition] = useState(positionParam || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const QUESTIONS_PER_BATCH = 10;

  useEffect(() => {
    if (selectedIndustry && selectedPosition) {
      const questions =
        questionsData[selectedIndustry]?.[selectedPosition] || [];
      if (questions.length) {
        setShuffledQuestions(shuffleArray(questions));
        setAnswers({});
        setSubmitted(false);
        setScore(0);
        setError("");
      } else {
        setShuffledQuestions([]);
        setError(`No questions available for ${selectedPosition} in ${selectedIndustry}`);
      }
    }
  }, [selectedIndustry, selectedPosition]);

  const currentQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_BATCH);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {

      window.scrollTo({ top: 0, behavior: "smooth" });  //screen automatically scrolls to top on submit
    let correct = 0;
    currentQuestions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);
  };

  const handleGoBackHome = () => navigate("/Homepage");

  const handleRestartQuiz = () => {
    const questions = questionsData[selectedIndustry]?.[selectedPosition] || [];
    setShuffledQuestions(shuffleArray(questions));
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const anyQuestionAnswered = () => {
    return currentQuestions.some((_, i) => answers[i] !== undefined);
  };

  const styles = {
    container: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "rgba(240,240,240,1)",
      color: "black",
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
    },
    inner: {
      width: "100%",
      margin: "0 auto",
      backgroundColor: "rgba(240,240,240,1)",
      color: "black",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      width: "100%",
      backgroundColor: "white",
      padding: "10px 5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box",
    },
    main: {
      flexGrow: 1,
      padding: "60px 10%",
    backgroundColor: "rgba(240,240,240,1)",
    },
questionCard: {
  backgroundColor: "#082305",
  color: "#ffffff",
  padding: "20px",          
  borderRadius: "12px",
  margin: "15px auto",       
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  width: "80%",             
  maxWidth: "1100px",      
  fontSize: "1.0rem",      
},


    btn: {
      padding: "10px 70px",
      backgroundColor: "#2cca1b",
      color: "#fff",
      border: "none",
      fontSize: "1rem",
      borderRadius: "30px",
      cursor: "pointer",
      margin: "10px",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "30px 10%",
      backgroundColor: "#f8f8f8",
      fontSize: "14px",
      flexWrap: "wrap",
      width: "100%",
      boxSizing: "border-box",
    },
  };

  const Header = () => (
   <header
  style={{
    width: "100%",
    maxWidth: "1300px",
    margin: "20px auto",
    backgroundColor: "white",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    gap: "50px",
  }}
>
  <div style={{ fontWeight: "bold", fontSize: "1.5rem", display: "flex", alignItems: "center" }}>
    <img
      src="/icons/img_1.png"
      alt="Logo"
      style={{ width: "40px", height: "37px", verticalAlign: "middle" }}
    />
    <span style={{ color: "#080808ff" }}>Intern</span>
    <span style={{ color: "#2cca1a" }}>Alze</span>
  </div>

  <nav style={{ display: "flex", gap: "50px" }}>
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseLeave={() => setShowDropdown(false)}
    >
     <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    fontWeight: "700",
    fontSize: "1.0rem",
    marginRight: "160px",

  }}
>
  CareerBoost
  <img
    src="/icons/pngegg.png"
    alt="dropdown arrow"
    style={{ width: "18px", height: "18px", objectFit: "contain" }}
  />
</a>

      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            border: "1px solid #ccc",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            padding: "10px 15px",
            borderRadius: "4px",
            zIndex: 1000,
            whiteSpace: "nowrap",
          }}
        >
        <Link
          to="/upload"
          style={{
            display: "block",
            marginBottom: "4px",
            padding: "5px 0",
            color: "#333",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Check Your CV Status
        </Link>
                       <Link
          to="/homepage"
          style={{
            display: "block",
            padding: "5px 0",
            color: "#333",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Prepare for Interview
        </Link>
        </div>
      )}
    </div>

   <Link
  to="/"      // navigates to CareerBoostHome
  onMouseEnter={(e) => (e.currentTarget.style.color = "gray")}
  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
  style={{
    color: "black",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
  }}
>
  About
</Link>


  </nav>

  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#2cca1b",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    }}
  >
    <img
      src="/icons/img.png"
      alt="Profile"
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  </div>
</header>

  );

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <Header />

        <main style={styles.main}>
          {!selectedIndustry || !selectedPosition ? (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "#003300" }}>Select Industry & Position</h2>
              <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)} style={{ padding: "10px 15px", margin: "10px", fontSize: "1rem", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option value="">-- Select Industry --</option>
                {Object.keys(questionsData).map((ind) => <option key={ind} value={ind}>{ind}</option>)}
              </select>
              {selectedIndustry && (
                <select value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)} style={{ padding: "10px 15px", margin: "10px", fontSize: "1rem", borderRadius: "8px", border: "1px solid #ccc" }}>
                  <option value="">-- Select Position --</option>
                  {Object.keys(questionsData[selectedIndustry] || {}).map((pos) => <option key={pos} value={pos}>{pos}</option>)}
                </select>
              )}
            </div>
          ) : error || shuffledQuestions.length === 0 ? (
            <div style={{ textAlign: "center", color: "red", marginTop: "50px" }}>
              <p>{error}</p>
              <button style={styles.btn} onClick={handleGoBackHome}>Back to Home</button>
            </div>
          ) : (
            <div>
         {submitted && (
  <div
    style={{
      fontSize: "2.3rem",
      fontWeight: "800",
      color: "#00cc44",
      textAlign: "left",
     marginTop: "-60px",      
      marginBottom: "20px",   
      marginLeft: "70px",
      letterSpacing: "1px",
      transition: "all 0.3s ease",
    }}
  >
    Your Score: {score}/{currentQuestions.length}
  </div>
)}



         <div
style={{
    padding: "0px 20px 10px",
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.6",
    color: "#0b0b0bff",
    textAlign: "left",
    marginLeft: "70px",
    marginTop: "-10px",      
  }}
>
  <p>
    <strong>Industry:</strong> {selectedIndustry}
  </p>
  <p>
    <strong>Position:</strong> {selectedPosition}
  </p>
</div>



              {currentQuestions.map((q, i) => (
                <div key={i} style={styles.questionCard}>
                  <p><strong>Q{i + 1}:</strong> {q.question}</p>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {q.options.map((opt, j) => (
                      <li key={j} style={{ marginBottom: "10px" }}>
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name={`q${i}`}
                            value={opt}
                            checked={answers[i] === opt}
                            onChange={() => handleChange(i, opt)}
                            disabled={submitted}
                            style={{ marginRight: "8px", transform: "scale(1.2)" }}
                          />
                          {opt}
                        </label>
                      </li>
                    ))}
                  </ul>
                  {submitted && (
                    <div style={{ backgroundColor: "#d4f5d2", color: "#000", padding: "15px 20px", borderRadius: "0 0 12px 12px", margin: "0 -20px -20px -20px", fontSize: "1rem", borderTop: "1px solid #b2e2b0" }}>
                      <p><strong>Correct answer:</strong> {q.answer}</p>
                      {q.explanation && <p><strong>Explanation:</strong> {q.explanation}</p>}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ textAlign: "center", marginTop: "30px" }}>
                {!submitted ? (
                  <button style={styles.btn} onClick={handleSubmit} disabled={!anyQuestionAnswered()}>Submit Quiz</button>
                ) : (
                  <button style={styles.btn} onClick={handleRestartQuiz}>Restart Quiz</button>
                )}
                <button style={styles.btn} onClick={handleGoBackHome}>Back to Home</button>
              </div>
            </div>
          )}
        </main>

        <footer style={styles.footer}>
          <p style={{ color: "#555", flex: 1, minWidth: "200px" }}>
            ©2008–2025 <strong>InternAlze</strong>. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
  {[
    { name: "twitter", url: "https://twitter.com/yourprofile" },
    { name: "linkedin", url: "https://linkedin.com/in/yourprofile" },
    { name: "facebook", url: "https://facebook.com/yourprofile" },
    { name: "instagram", url: "https://instagram.com/yourprofile" },
    { name: "Be", url: "https://behance.net/yourprofile" }
  ].map((icon, i) => (
    <a key={i} href={icon.url} target="_blank" rel="noopener noreferrer">
      <img
        src={`/icons/${icon.name}.png`}
        alt={icon.name}
        style={{ width: "30px", height: "30px", marginLeft: "5px"  }}
      />
    </a>
  ))}
</div>
        </footer>
      </div>
    </div>
  );
}
