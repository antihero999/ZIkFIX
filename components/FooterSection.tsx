"use client";

import { motion } from "framer-motion";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Book a Repair", href: "/book" },
];

const SERVICES_LIST = [
  "Screen Replacement",
  "Battery Repair",
  "Water Damage Recovery",
  "Charging Port Fix",
  "Camera Repair",
  "Software & OS Issues",
  "Laptop Repair",
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const SOCIAL_LINKS = [
  {
    id: "footer-tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@zikfix_stores",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
      </svg>
    ),
  },
  {
    id: "footer-whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/2349000000000",
    icon: (
      <svg width="20" height="20" viewBox="0 0 360 362" fill="none">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{
        background: "#0a0a0a",
        color: "#fff",
        paddingTop: 80,
        paddingBottom: 0,
        paddingLeft: 24,
        paddingRight: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow shader */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -150,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, rgba(212,165,116,0.05) 40%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      
      {/* Top Border Shader */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(212,165,116,0.5), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            paddingBottom: 60,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: 16,
                padding: 2,
                background: "linear-gradient(135deg, #8B5CF6, #D4A574)",
                boxShadow: "0 8px 32px rgba(139,92,246,0.25)"
              }}>
                <img
                  src="/img 12.png"
                  alt="ZikFix Logo"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 14,
                    objectFit: "cover",
                  }}
                />
              </div>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 28,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  textShadow: "0 2px 10px rgba(0,0,0,0.5)"
                }}
              >
                ZIKFIX
              </span>
            </div>

            <p
              style={{
                fontSize: 13.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.45)",
                marginBottom: 24,
                maxWidth: 240,
              }}
            >
              Professional phone & laptop repair plus quality gadget sales. Open 24/7 at Dynamo Junction, Awka.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(139,92,246,0.2)";
                    el.style.color = "#A78BFA";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.color = "rgba(255,255,255,0.5)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    <span style={{ color: "#D4A574", fontSize: 10 }}>▸</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {SERVICES_LIST.map((svc) => (
                <li key={svc}>
                  <a
                    href="/services"
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              style={{
                fontWeight: 600,
                fontSize: 13,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ color: "#D4A574", marginTop: 2, flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  Dynamo Junction, UNIZIK gate road,<br />Awka, Anambra State, Nigeria
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ color: "#8B5CF6", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                  }}
                >
                  Open 24 hours · 7 days a week
                </p>
              </div>

              <a
                href="https://wa.me/2349000000000"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  background: "#25D366",
                  borderRadius: 9999,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 13,
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 3px 16px rgba(37,211,102,0.35)",
                  marginTop: 4,
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "scale(1.04)";
                  el.style.boxShadow = "0 6px 24px rgba(37,211,102,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = "0 3px 16px rgba(37,211,102,0.35)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 360 362" fill="none">
                  <path fill="currentColor" fillRule="evenodd" d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z" clipRule="evenodd"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 28,
            paddingBottom: 28,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {year} ZikFix Stores. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.08em",
            }}
          >
            [ AWK_NG · 24/7 · EST. AWKA ]
          </p>
        </div>
      </div>
    </footer>
  );
}
