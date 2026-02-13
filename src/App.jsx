import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Activity from "./pages/Activity.jsx";
import Recruitment from "./pages/Recruitment.jsx";
import Apply from "./pages/Apply.jsx";
import Results from "./pages/Results.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary-bg">
        <Header />
        <main className="mx-auto w-full max-w-5xl px-6 py-10">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
