import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import SignUp from './components/SignUp.jsx'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
