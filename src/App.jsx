import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Resume from "./pages/Resume";
import Additional from "./pages/Additional";
import ContactMe from "./pages/ContactMe";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Resume />
      <Additional />
      <ContactMe />
    </div>
  );
}

export default App;
