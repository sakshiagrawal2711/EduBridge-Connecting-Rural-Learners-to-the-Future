import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import Team from "./components/Team";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import StudyPage from "./pages/StudyPage";
import LanguageSwitcher from "./components/LanguageSwitcher";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <Timeline />
        <Team />
        <FAQs />
        <Contact />
      </main>
      <Footer />
  <LanguageSwitcher />
    </>
  );
}

function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/study" element={<StudyPage />} />
    </Routes>
  );
}

export default App;
