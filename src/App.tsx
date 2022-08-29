import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

// new line of code

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addPerson" element={<AddPersonPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

const HomePage = () => (
  <>
    <Nav />
    <PersonList />
    <Footer />
  </>
);

const AddPersonPage = () => (
  <>
    <Nav />
    <PersonForm />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Nav /> 
    <About />
    <Footer />
  </>
);

export default App;
