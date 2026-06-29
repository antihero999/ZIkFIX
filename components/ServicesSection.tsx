"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "service-screen",
    image: "/img 13.png",
    title: "Screen Replacement",
    desc: "Cracked or dead display? We restore it to factory-fresh clarity — same day.",
    price: "From ₦8,000",
    badge: "Most Popular",
    badgeColor: "#8B5CF6",
    accent: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.25)",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    id: "service-battery",
    image: "/img 2.jfif",
    title: "Battery Repair",
    desc: "Draining too fast? Swollen battery? We swap it out with premium cells.",
    price: "From ₦5,000",
    badge: "Quick Fix",
    badgeColor: "#D4A574",
    accent: "rgba(212,165,116,0.1)",
    border: "rgba(212,165,116,0.25)",
    glow: "rgba(212,165,116,0.15)",
  },
  {
    id: "service-water",
    image: "/img 11.png",
    title: "Water Damage Recovery",
    desc: "Dropped in water? We perform full board-level diagnostics and ultrasonic cleaning.",
    price: "From ₦10,000",
    badge: "Advanced",
    badgeColor: "#EC4899",
    accent: "rgba(236,72,153,0.1)",
    border: "rgba(236,72,153,0.25)",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    id: "service-charging",
    image: "/img 3.png",
    title: "Charging Port Fix",
    desc: "Won't charge? Loose connector? Fast port repair or full replacement.",
    price: "From ₦4,000",
    badge: "Same Day",
    badgeColor: "#D4A574",
    accent: "rgba(212,165,116,0.1)",
    border: "rgba(212,165,116,0.2)",
    glow: "rgba(212,165,116,0.12)",
  },
  {
    id: "service-camera",
    image: "/img 14.png",
    title: "Camera Repair",
    desc: "Blurry shots or camera not launching? Lens, sensor, or module replacement done right.",
    price: "From ₦6,000",
    badge: "Precision",
    badgeColor: "#8B5CF6",
    accent: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.2)",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    id: "service-software",
    image: "/img 5.jpg",
    title: "Software & OS Issues",
    desc: "Stuck on boot loop, virus, or slow performance? Deep system diagnostics & restore.",
    price: "From ₦3,000",
    badge: "Remote OK",
    badgeColor: "#EC4899",
    accent: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    glow: "rgba(236,72,153,0.1)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
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
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto 64px",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-accent-gray)",
              display: "block",
              marginBottom: 16,
            }}
          >
            [ OUR EXPERTISE ]
          </span>

          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "var(--color-foreground)",
              marginBottom: 24,
            }}
          >
            What We Fix.
          </h2>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "var(--color-muted-foreground)",
            }}
          >
            From shattered screens to logic board nightmares. If it has a pulse, we can bring it back to life. Expert technicians, premium parts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="group relative overflow-hidden flex flex-col"
              style={{
                background: "var(--color-card)",
                borderRadius: "var(--radius-section)",
                border: `1px solid ${svc.border}`,
                boxShadow: `0 12px 40px ${svc.glow}`,
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%)",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "0 32px 32px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  position: "relative",
                  zIndex: 2,
                  marginTop: -20,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 12,
                      color: svc.badgeColor,
                      background: svc.accent,
                      border: `1px solid ${svc.border}`,
                      padding: "6px 14px",
                      borderRadius: 9999,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {svc.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--color-card-foreground)",
                    marginBottom: 12,
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--color-muted-foreground)",
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  {svc.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 20,
                    borderTop: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 700,
                      color: "var(--color-foreground)",
                    }}
                  >
                    {svc.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
