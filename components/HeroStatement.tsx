"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroStatement() {
  return (
    <section
      id="hero-statement"
      style={{
        position: "relative",
        overflow: "hidden",
        paddingTop: 160,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        background: "var(--color-background)",
      }}
    >
      {/* ── Background Image Layer ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,1) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: 28 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 20px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--color-accent-gray-light)",
              letterSpacing: "0.02em",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--color-accent-gray-light)",
                display: "inline-block",
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            Open 24/7 · Dynamo Junction, Awka
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-headline"
          className="hero-headline"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
            marginBottom: 32,
            maxWidth: 960,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Your Device&apos;s{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #86868b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Glow-Up
          </span>{" "}
          Starts Here.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--color-accent-gray-light)",
            maxWidth: 580,
            margin: "0 auto 48px",
          }}
        >
          Professional phone &amp; laptop repair, plus quality gadgets —{" "}
          <strong style={{ color: "var(--color-foreground)", fontWeight: 500 }}>open 24/7</strong> at
          Dynamo Junction, Awka.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="#book"
            id="hero-cta-book"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Repair
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <motion.a
            href="#shop"
            id="hero-cta-shop"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Shop Gadgets
          </motion.a>
        </motion.div>

        {/* TikTok handle */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginTop: 36 }}
        >
          <a
            href="https://tiktok.com/@zikfix_stores"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-tiktok"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--color-accent-gray)",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-foreground)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-accent-gray)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
            </svg>
            @zikfix_stores
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
