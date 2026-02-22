import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Activity from "./pages/Activity.jsx";
import Recruitment from "./pages/Recruitment.jsx";
import Apply from "./pages/Apply.jsx";
import Results from "./pages/Results.jsx";
import Footer from "./components/Footer.jsx";

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary-bg">
        <Header />
        <main className="mx-auto w-full max-w-[1440px]">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
