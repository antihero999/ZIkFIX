"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useEffect, useState } from "react";

export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href="https://wa.me/2349000000000?text=Hello%20ZikFix%2C%20I%20need%20help%20with%20a%20repair"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.94 }}
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 22px",
        background: "#25D366",
        borderRadius: 9999,
        textDecoration: "none",
        boxShadow: "0 6px 32px rgba(37,211,102,0.45)",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Shimmer overlay */}
      <motion.div
        aria-hidden
        animate={{ x: ["−100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1.5 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          transform: "skewX(-15deg)",
          pointerEvents: "none",
        }}
      />
      <WhatsAppIcon size={22} />
      <span>Chat with Us</span>
    </motion.a>
  );
}
