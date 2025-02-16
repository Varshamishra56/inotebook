import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NotesState";
import "./index.css";
import Alert from "./components/Alert";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({ msg: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showalert={showalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup showalert={showalert} />} />
            <Route
              path="/login"
              element={<LoginPage showalert={showalert} />}
            />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}
