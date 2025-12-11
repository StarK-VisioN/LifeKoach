// App.js
import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load other pages
const AboutUs = lazy(() => import("./Modules/AboutUs/ComanyInfo"));
const ServicesPage = lazy(() => import("./Modules/services/services"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const ContactUs = lazy(() => import("./components/Contact_Us"));

import Dashboard from "./components/Dashboard";
import Revives from "./components/Revives"; 
import Feedback from "./components/Feedback";
import JoyfulLife from "./components/JoyfulLife";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2952a3] to-[#6b3483]">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [openedByUser, setOpenedByUser] = useState(false);
  const timerRef = useRef();

  // Create refs for scrolling
  const revivesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.title = "LifeKoach Pvt Ltd";
  }, []);

  const handleOpenForm = () => {
    setOpenedByUser(true);
    setShowForm(true);
  };

  // Handle navigation and scrolling
  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(section);
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "services":
        revivesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        teamRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* First screen */}
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar onNavClick={handleNavClick} />

        <div className="flex-1 flex flex-col min-h-0">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Dashboard onApplyClick={handleOpenForm} />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </div>
      </div>

      {/* Revives + Feedback visible only on home page */}
      {location.pathname === "/" && (
        <>
          <div className="bg-stone-200" ref={revivesRef}>
            <Revives />
          </div>
          <div  className="bg-stone-200">
          <Feedback />
          </div>
          <div className="bg-stone-200">
          <JoyfulLife />
          </div>
          <div className="bg-stone-200" ref={teamRef}>
            <Team />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        limit={1}
        theme="light"
      />
    </>
  );
};

export default App;