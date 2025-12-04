"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const industryData = {
  "Information & Communication": [
    "Software Engineer",
    "Network Administrator",
    "Data Scientist",
    "UI/UX Designer",
    "Cybersecurity Analyst",
    "DevOps Engineer",
    "Machine Learning Engineer",
  ],
  Engineering: [
    "Mechanical Engineer",
    "Civil Engineer",
    "Electrical Engineer",
    "Industrial Engineer",
    "Environmental Engineer",
    "Biomedical Engineer",
  ],
  Business: [
    "Business Analyst",
    "Project Manager",
    "Marketing Manager",
    "Accountant",
    "Financial Analyst",
    "Sales Manager",
    "HR Manager",
  ],
  Science: [
    "Research Scientist",
    "Lab Technician",
    "Chemist",
    "Biologist",
    "Physicist",
    "Environmental Scientist",
    "Geologist",
  ],
  "Retail & E-Commerce": [
    "Store Manager",
    "Sales Associate",
    "Merchandiser",
    "Customer Service Rep",
    "E-commerce Specialist",
    "Inventory Manager",
    "Retail Buyer",
  ],
  "Arts, Media & Design": [
    "Graphic Designer",
    "Animator",
    "Art Director",
    "Photographer",
    "Video Editor",
    "Fashion Designer",
    "Copywriter",
  ],
  "Education & Training": [
    "Teacher",
    "Curriculum Developer",
    "Instructional Designer",
    "School Counselor",
    "Education Administrator",
    "Training Specialist",
  ],
};

export default function App() {
  const [industry, setIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!industry || !position) {
      alert("Please select both industry and position.");
      return;
    }
    navigate(
      `/quiz?industry=${encodeURIComponent(industry)}&position=${encodeURIComponent(
        position
      )}`
    );
  };

  return (
    <div
      style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "rgba(240,240,240,1)",
        color: "white",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
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
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", display: "flex", alignItems: "center"}}>
          <img
            src="/icons/img_1.png"
            alt="Logo"
            style={{ width: "40px", height: "37px", verticalAlign: "middle" }}
          />
           <span style={{ color: "#080808ff" }}>Intern</span>
          <span style={{ color: "#2cca1a" }}>Alze</span>
        </div>

       <>
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
          to="/"
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

      {/* Profile icon wrapped with Link (no layout changed) */}
      <Link to="/profile" style={{ textDecoration: "none" }}>
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
            cursor: "pointer",
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
      </Link>
    </>
      </header>

      {/* Main Content */}
      <main
        style={{
          backgroundColor: "rgba(240,240,240,1)",
          padding: "40px 20px",
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
        <h1
  style={{
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "black", 
  }}
>
  Get Ready for an Interview
</h1>

          {/* Industry */}
          <div
            style={{
              background: "white",
              padding: "40px 30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <label
              style={{
                fontWeight: 600,
                color: "#222",
                display: "block",
                marginBottom: "10px",
                fontSize: "1.1rem",
              }}
            >
              Choose Your Industry
            </label>
            <select
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
                setPosition("");
              }}
              required
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "#444",
              }}
            >
              <option value="">Select Industry</option>
              {Object.keys(industryData).map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          {/* Position */}
          <div
            style={{
              background: "white",
              padding: "40px 30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <label
              style={{
                fontWeight: 600,
                color: "#222",
                display: "block",
                marginBottom: "10px",
                fontSize: "1.1rem",
              }}
            >
              Choose Position
            </label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              disabled={!industry}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                color: "#444",
              }}
            >
              <option value="">Select Position</option>
              {industry &&
                industryData[industry].map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
            </select>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 70px",
              backgroundColor: "#2cca1b",
              color: "white",
              border: "none",
              fontSize: "1rem",
              borderRadius: "30px",
              cursor: "pointer",
              alignSelf: "center",
            }}
          >
            Submit
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#f8f8f8",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px 20px",
          fontSize: "14px",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
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
  );
}
