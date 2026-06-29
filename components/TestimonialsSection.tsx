"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    id: "review-1",
    name: "Chukwuemeka O.",
    role: "300L UNIZIK Student",
    avatar: "C",
    avatarGrad: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    stars: 5,
    text: "Brought in my iPhone 13 with a completely shattered screen. Fixed within 2 hours and it looks brand new. Best repair shop in Awka, no doubt.",
    service: "Screen Replacement",
    accentColor: "#8B5CF6",
  },
  {
    id: "review-2",
    name: "Adaeze M.",
    role: "NYSC Corp Member",
    avatar: "A",
    avatarGrad: "linear-gradient(135deg, #D4A574, #B8864E)",
    stars: 5,
    text: "My laptop fell in water and I thought it was completely dead. ZikFix brought it back to life! They even cleaned it internally. Absolutely amazing service.",
    service: "Water Damage Recovery",
    accentColor: "#D4A574",
  },
  {
    id: "review-3",
    name: "Ikenna B.",
    role: "Business Owner, Awka",
    avatar: "I",
    avatarGrad: "linear-gradient(135deg, #EC4899, #8B5CF6)",
    stars: 5,
    text: "Open 24/7 is real — I came in at 11pm with a dead phone before a big meeting and they sorted it out within the hour. Lifesavers, literally.",
    service: "Battery Replacement",
    accentColor: "#EC4899",
  },
  {
    id: "review-4",
    name: "Chiamaka N.",
    role: "Medical Student",
    avatar: "C",
    avatarGrad: "linear-gradient(135deg, #8B5CF6, #D4A574)",
    stars: 5,
    text: "The pricing is so transparent — no hidden charges. Got my charging port fixed and camera replaced. Both working perfectly. Highly recommend!",
    service: "Charging Port + Camera",
    accentColor: "#8B5CF6",
  },
  {
    id: "review-5",
    name: "Emeka F.",
    role: "Photographer, Awka",
    avatar: "E",
    avatarGrad: "linear-gradient(135deg, #EC4899, #D4A574)",
    stars: 5,
    text: "Got a refurbished Samsung from their shop — works perfectly and came with a warranty. Great value. The gadgets are top quality.",
    service: "Gadget Purchase",
    accentColor: "#EC4899",
  },
  {
    id: "review-6",
    name: "Obiageli T.",
    role: "Teacher",
    avatar: "O",
    avatarGrad: "linear-gradient(135deg, #D4A574, #EC4899)",
    stars: 5,
    text: "They fixed a software issue on my phone that two other shops couldn't solve. Very knowledgeable team. Will always bring my devices here.",
    service: "Software Repair",
    accentColor: "#D4A574",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4A574">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: "var(--color-background)",
        paddingTop: 80,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        overflow: "hidden",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", marginBottom: 64, maxWidth: 680, margin: "0 auto 64px" }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            background: "rgba(236,72,153,0.1)",
            border: "1px solid rgba(236,72,153,0.25)",
            borderRadius: 9999,
            fontSize: 11,
            fontWeight: 600,
            color: "#EC4899",
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#EC4899",
              display: "inline-block",
              boxShadow: "0 0 6px rgba(236,72,153,0.8)",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          Happy Customers
        </span>

        <h2
          style={{
            fontFamily: "'Clash Display', 'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--color-foreground)",
            marginBottom: 18,
          }}
        >
          Real People.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #86868b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real Results.
          </span>
        </h2>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            lineHeight: 1.7,
            color: "var(--color-muted-foreground)",
            fontWeight: 400,
          }}
        >
          Hundreds of students, professionals & families trust ZikFix across Awka.
        </p>
      </motion.div>

      {/* Review cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {REVIEWS.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </motion.div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ textAlign: "center", marginTop: 56 }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            color: "var(--color-muted-foreground)",
            marginBottom: 16,
          }}
        >
          See more reviews and before/afters
        </p>
        <a
          href="https://instagram.com/zikfix_stores"
          target="_blank"
          rel="noopener noreferrer"
          id="testimonials-instagram-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "13px 28px",
            background: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
            borderRadius: 9999,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            boxShadow: "0 4px 24px rgba(236,72,153,0.35)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04) translateY(-1px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(236,72,153,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1) translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(236,72,153,0.35)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
          Follow @zikfix_stores
        </a>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        .review-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(43,36,32,0.1) !important;
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <motion.div
      id={review.id}
      variants={cardVariants}
      className="review-card"
      style={{
        background: "var(--color-card)",
        borderRadius: 20,
        border: "1px solid var(--color-border-subtle)",
        padding: 28,
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Top-right quote mark */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 16,
          right: 20,
          fontFamily: "Georgia, serif",
          fontSize: 80,
          lineHeight: 1,
          color: review.accentColor,
          opacity: 0.07,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div style={{ marginBottom: 16 }}>
        <StarRating count={review.stars} />
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 14,
          lineHeight: 1.7,
          color: "var(--color-card-foreground)",
          marginBottom: 24,
          fontWeight: 400,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Service tag */}
      <div
        style={{
          display: "inline-block",
          padding: "3px 12px",
          borderRadius: 9999,
          fontSize: 10,
          fontWeight: 700,
          fontFamily: "JetBrains Mono, monospace",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: review.accentColor,
          background: `${review.accentColor}15`,
          border: `1px solid ${review.accentColor}30`,
          marginBottom: 20,
        }}
      >
        {review.service}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "var(--color-border-subtle)",
          marginBottom: 16,
        }}
      />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: review.avatarGrad,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {review.avatar}
        </div>
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--color-card-foreground)",
              marginBottom: 2,
            }}
          >
            {review.name}
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              color: "var(--color-muted-foreground)",
              fontWeight: 400,
            }}
          >
            {review.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
