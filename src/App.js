import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NotesState";
import "./index.css";
import Alert from "./components/Alert";

export default function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="Hey there Varsha mishra" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}
