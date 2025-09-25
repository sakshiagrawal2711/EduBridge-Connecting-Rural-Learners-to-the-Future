import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import StudyPage from "./pages/StudyPage";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MentorPage from "./pages/MentorPage";
import ProgressPage from "./pages/ProgressPage";
import BridgePage from "./pages/BridgePage";
import FinancePage from "./pages/FinancePage";
import CareerPage from "./pages/CareerPage";
import ResearchPage from "./pages/ResearchPage";

function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
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
      <Route path="/mentor" element={<MentorPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/bridge" element={<BridgePage />} />
      <Route path="/finance" element={<FinancePage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
