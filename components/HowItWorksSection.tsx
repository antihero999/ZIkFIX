"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Get a Free Quote",
    desc: "Use our estimator or message us on WhatsApp for an instant, transparent price.",
  },
  {
    step: "02",
    title: "Drop-off or Mail-in",
    desc: "Bring your device to Dynamo Junction or send it in. We also offer local pickup in Awka.",
  },
  {
    step: "03",
    title: "Fast Repair",
    desc: "Our expert technicians get to work immediately. Most repairs are done in under an hour.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      style={{
        background: "var(--color-background)",
        padding: "100px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
            textAlign: "center",
          }}
        >
          How It <span style={{ color: "#8B5CF6" }}>Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {STEPS.map((step, i) => (
                <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 bg-[var(--color-card)] border border-[var(--color-border-subtle)] rounded-3xl p-6 md:p-8 items-start"
              >
                <span
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontWeight: 800,
                    fontSize: 48,
                    lineHeight: 1,
                    color: "var(--color-border-subtle)",
                  }}
                >
                  {step.step}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Clash Display', sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      color: "var(--color-foreground)",
                      marginBottom: 8,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 16,
                      color: "var(--color-muted-foreground)",
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden flex items-end justify-center"
          >
            <img 
              src="/zikfix man.png" 
              alt="Zikfix Professional" 
              loading="lazy"
              className="w-full h-full object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
