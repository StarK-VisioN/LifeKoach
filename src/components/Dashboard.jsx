// Dashboard.js
import React from "react";
import HeroSection from "./HeroSection";
import ScrollingText from "./ScrollingText";

const Dashboard = ({ onApplyClick }) => (
  <div className="h-full flex flex-col">
    {/* Hero Section - takes remaining space */}
    <div className="flex-1 min-h-0">
      <HeroSection onApplyClick={onApplyClick} />
    </div>
    
    {/* Scrolling Text Banner - fixed at bottom */}
    <div className="flex-shrink-0">
      <ScrollingText />
    </div>
  </div>
);

export default Dashboard;