"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import React from "react";

export default function NotFound() {
  return (
    <main style={{ backgroundColor: "#FAF7F2", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        padding: "120px 24px",
        textAlign: "center"
      }}>
        <h1 style={{ 
          fontFamily: "var(--font-clash)", 
          fontSize: "clamp(48px, 8vw, 80px)", 
          fontWeight: 600, 
          color: "#1a1a1a",
          marginBottom: 16 
        }}>
          404
        </h1>
        <h2 style={{ 
          fontFamily: "var(--font-clash)", 
          fontSize: "clamp(24px, 4vw, 32px)", 
          fontWeight: 500, 
          color: "#1a1a1a",
          marginBottom: 24 
        }}>
          Oops, nothing here.
        </h2>
        <p style={{ 
          fontSize: 16, 
          color: "rgba(0,0,0,0.6)", 
          maxWidth: 400, 
          marginBottom: 40 
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          href="/"
          style={{
            background: "#8B5CF6",
            color: "#fff",
            padding: "16px 32px",
            borderRadius: 9999,
            fontWeight: 600,
            fontSize: 15,
            textDecoration: "none",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 14px rgba(139,92,246,0.4)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(139,92,246,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(139,92,246,0.4)";
          }}
        >
          Back to Home
        </Link>
      </div>

      <FooterSection />
    </main>
  );
}
