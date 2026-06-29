"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEVICES = ["iPhone", "Samsung Galaxy", "MacBook", "Other Smartphone", "Other Laptop"];
const ISSUES = ["Screen Repair", "Battery Replacement", "Charging Port", "Water Damage", "Software / Logic Board"];

function getPriceEstimate(device: string, issue: string) {
  if (!device || !issue) return null;
  if (device === "iPhone" && issue === "Screen Repair") return "₦15,000 - ₦60,000";
  if (device === "MacBook" && issue === "Screen Repair") return "₦80,000 - ₦150,000";
  if (issue === "Battery Replacement") return "₦5,000 - ₦25,000";
  if (issue === "Charging Port") return "₦4,000 - ₦12,000";
  return "Requires Free Physical Diagnosis";
}

export default function RepairEstimatorSection() {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");

  const estimate = getPriceEstimate(device, issue);

  return (
    <section
      style={{
        background: "var(--color-background)",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div
        className="mx-auto max-w-3xl bg-[var(--color-card)] border border-[var(--color-border-subtle)] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/40"
        style={{ margin: "0 auto", maxWidth: "48rem" }}
      >
        {/* Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h2
            style={{
              fontFamily: "'Clash Display', 'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              color: "var(--color-foreground)",
              marginBottom: 12,
            }}
          >
            Get a Repair Estimate
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              color: "var(--color-muted-foreground)",
              marginBottom: 40,
            }}
          >
            Select your device and issue for an instant baseline quote.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, textAlign: "left" }}>
            <div>
              <label style={{ display: "block", marginBottom: 8, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "var(--color-accent-gray-light)" }}>
                1. Select Device
              </label>
              <select
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: 12,
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border-subtle)",
                  color: "var(--color-foreground)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option value="" disabled>Choose a device...</option>
                {DEVICES.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <AnimatePresence>
              {device && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <label style={{ display: "block", marginBottom: 8, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "var(--color-accent-gray-light)" }}>
                    2. Select Issue
                  </label>
                  <select
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "16px",
                      borderRadius: 12,
                      background: "var(--color-background)",
                      border: "1px solid var(--color-border-subtle)",
                      color: "var(--color-foreground)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      appearance: "none",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>Choose an issue...</option>
                    {ISSUES.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {estimate && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    marginTop: 20,
                    padding: 24,
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    borderRadius: 16,
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "var(--color-muted-foreground)", marginBottom: 8 }}>Estimated Price</p>
                  <p style={{ fontFamily: "'Clash Display', sans-serif", fontSize: 32, fontWeight: 700, color: "#8B5CF6", marginBottom: 20 }}>
                    {estimate}
                  </p>
                  <a
                    href={`https://wa.me/2349000000000?text=Hello%20ZikFix%2C%20I%20used%20the%20estimator.%20I%20have%20a%20${encodeURIComponent(device)}%20with%20a%20${encodeURIComponent(issue)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    Proceed with this Repair
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
