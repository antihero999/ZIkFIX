"use client";

import { motion } from "framer-motion";

const PILLS = [
  {
    id: "trust-hours",
    emoji: "🕐",
    label: "Open 24/7",
    dot: "var(--color-accent-gray-light)",
  },
  {
    id: "trust-location",
    emoji: "📍",
    label: "UNIZIK Junction, Awka",
    dot: "var(--color-foreground)",
  },
  {
    id: "trust-parts",
    emoji: "🔧",
    label: "100% Quality Parts",
    dot: "var(--color-primary)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TrustStrip() {
  return (
    <section
      id="trust-strip"
      style={{
        background: "var(--color-background)",
        paddingTop: 64,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {PILLS.map((pill) => (
          <motion.div
            key={pill.id}
            id={pill.id}
            variants={pillVariants}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="trust-pill"
            style={{ cursor: "default" }}
          >
            {/* Colored dot */}
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: pill.dot,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "1.1rem" }}>{pill.emoji}</span>
            <span
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: "var(--color-card-foreground)",
              }}
            >
              {pill.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom micro-text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{
          textAlign: "center",
          marginTop: 32,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
          fontSize: 13,
          color: "var(--color-muted-foreground)",
          fontWeight: 400,
        }}
      >
        Trusted by hundreds of students &amp; professionals across Awka —{" "}
        <a
          href="https://instagram.com/zikfix_stores"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--color-primary-hover)", fontWeight: 500, textDecoration: "none" }}
        >
          @zikfix_stores
        </a>
      </motion.p>
    </section>
  );
}
