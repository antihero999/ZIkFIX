"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/feature-card";

const BOOKING_OPTIONS = [
  {
    id: "book-screen",
    image: "/img 8.jfif",
    icon: <span style={{ fontSize: 32 }}>📱</span>,
    title: "Screen Repair",
    description: "Instant quotes for cracked or non-responsive displays. We use premium grade parts.",
    waMsg: "Hello%20ZikFix%2C%20I%20need%20a%20screen%20repair%20quote",
  },
  {
    id: "book-battery",
    image: "/img 1.jfif",
    icon: <span style={{ fontSize: 32 }}>🔋</span>,
    title: "Battery Replacement",
    description: "Quick replacements to fix fast draining, swollen, or dead batteries.",
    waMsg: "Hello%20ZikFix%2C%20I%20need%20a%20battery%20replacement%20quote",
  },
  {
    id: "book-water",
    image: "/img 10.png",
    icon: <span style={{ fontSize: 32 }}>💧</span>,
    title: "Water Damage",
    description: "Full diagnostic and ultrasonic cleaning for devices dropped in water.",
    waMsg: "Hello%20ZikFix%2C%20I%20have%20water%20damage%20on%20my%20device",
  },
  {
    id: "book-charging",
    image: "/img 7.jfif",
    icon: <span style={{ fontSize: 32 }}>⚡</span>,
    title: "Charging Port",
    description: "Fix loose ports or devices that won't recognize cables or hold a charge.",
    waMsg: "Hello%20ZikFix%2C%20I%20need%20a%20charging%20port%20repair%20quote",
  },
  {
    id: "book-laptop",
    image: "/img 4.jfif",
    icon: <span style={{ fontSize: 32 }}>💻</span>,
    title: "Laptop Repair",
    description: "Hardware and software repairs for Mac and PC. Screen, battery, or logic board.",
    waMsg: "Hello%20ZikFix%2C%20I%20need%20a%20laptop%20repair%20quote",
  },
  {
    id: "book-other",
    image: "/img 6.jpg",
    icon: <span style={{ fontSize: 32 }}>🔧</span>,
    title: "Something Else",
    description: "Describe your specific issue and our technicians will get you a custom quote.",
    waMsg: "Hello%20ZikFix%2C%20I%20need%20a%20repair%20quote",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BookingSection() {
  return (
    <section
      id="book"
      style={{
        background: "var(--color-background)",
        paddingTop: 100,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradients */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -60,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Dot matrix */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto" }}>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 18px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: 9999,
                fontSize: 11,
                fontWeight: 600,
                color: "var(--color-accent-gray-light)",
                fontFamily: "JetBrains Mono, monospace",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-accent-gray-light)",
                  display: "inline-block",
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              Book a Repair
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--color-foreground)",
              marginBottom: 20,
            }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #86868b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fix It?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "var(--color-muted-foreground)",
              marginBottom: 48,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Pick your repair type to get an instant quote and chat directly with our technicians. Fast quotes, transparent pricing, same-day service.
          </motion.p>
        </div>

        {/* Repair type grid using FeatureCards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {BOOKING_OPTIONS.map((opt) => (
            <motion.a
              key={opt.id}
              href={`https://wa.me/2347036722204?text=${opt.waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="block outline-none"
            >
              <FeatureCard
                icon={opt.icon}
                image={opt.image}
                title={opt.title}
                description={opt.description}
                className="h-full bg-black/40 hover:bg-[#111] hover:border-white/20 transition-colors group"
              />
            </motion.a>
          ))}
        </motion.div>


      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
