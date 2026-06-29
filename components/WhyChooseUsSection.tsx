"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "5,000+", label: "Devices Repaired", color: "#8B5CF6" },
  { value: "99%", label: "Success Rate", color: "#EC4899" },
  { value: "< 1 hr", label: "Avg. Repair Time", color: "#D4A574" },
  { value: "12 mo", label: "Warranty", color: "#ffffff" },
];

export default function WhyChooseUsSection() {
  return (
    <section
      style={{
        background: "var(--color-background)",
        padding: "100px 24px",
        position: "relative",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Clash Display', 'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-foreground)",
            marginBottom: 64,
          }}
        >
          Why Choose <span style={{ color: "var(--color-accent-gray-light)" }}>ZikFix?</span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 24,
                padding: "32px 24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--color-muted-foreground)",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
