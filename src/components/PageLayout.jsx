import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Shared layout for every page except Home (Home has its own Hero+Navbar setup)
export default function PageLayout({ children }) {
  return (
    <div>
      <div className="bg-gray-900">
        <Navbar transparent={false} />
      </div>
      {children}
      <Footer />
    </div>
  );
}
