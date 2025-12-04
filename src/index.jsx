import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerBoostHome from "./CareerBoostHome";
import Profile from "./Profile";
import UploadCV from "./UploadCV";
import Homepage from "./Homepage";
import "./index.css";
import Quiz from "./Quiz";


const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found. Make sure your index.html has a <div id='root'></div>.");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CareerBoostHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<UploadCV />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
