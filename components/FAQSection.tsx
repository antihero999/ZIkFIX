"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "How long does a screen replacement take?",
    a: "Most screen replacements, especially for iPhones and popular Samsung models, take less than 45 minutes while you wait.",
  },
  {
    q: "Do you use original parts?",
    a: "We offer both original pulled parts and high-quality aftermarket alternatives, allowing you to choose based on your budget. All parts come with a warranty.",
  },
  {
    q: "Is there a warranty on your repairs?",
    a: "Yes! We offer a standard 30-day to 12-month warranty depending on the repair type and the specific parts used.",
  },
  {
    q: "Where are you located?",
    a: "We are located at Dynamo Junction, Awka. We are open 24/7 for emergency repairs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: "var(--color-background)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Clash Display', 'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-foreground)",
            marginBottom: 48,
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "var(--color-foreground)",
                    textAlign: "left",
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      color: "var(--color-muted-foreground)",
                    }}
                  >
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        style={{
                          padding: "0 24px 24px",
                          fontFamily: "Inter, sans-serif",
                          fontSize: 15,
                          color: "var(--color-muted-foreground)",
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
