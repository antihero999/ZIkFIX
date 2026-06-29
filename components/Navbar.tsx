"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { usePathname } from "next/navigation";
import { ShoppingBag, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Shop",     href: "/shop" },
  { label: "About",    href: "/#about" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => {
      // On subpages, we always keep it looking "scrolled" for visibility, 
      // or we can let it be dynamic but we need the background.
      // Let's force it to always have the dark glass background on subpages.
      if (!isHomePage) {
        setScrolled(true);
        return;
      }
      setScrolled(window.scrollY > 20);
    };
    
    // Initial check
    onScroll();
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Glass bar — floats when scrolled */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            paddingTop: scrolled ? 12 : 0,
            transition: "padding 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
          className={scrolled ? "px-4 md:px-6" : "px-0 md:px-6"}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 56,
              borderRadius: scrolled ? 16 : 0,
              background: scrolled
                ? "rgba(18, 18, 18, 0.72)"
                : "rgba(0,0,0,0.2)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              border: scrolled
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid transparent",
              transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: scrolled
                ? "0 8px 32px rgba(0,0,0,0.4)"
                : "none",
            }}
          >
            {/* Logo */}
            <a
              href="#"
              id="nav-logo"
              className={scrolled ? "" : "pl-4 md:pl-0"}
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img
                src="/img 12.png"
                alt="ZikFix Logo"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                ZIKFIX
              </span>
            </a>

            {/* Desktop nav links — centered */}
            <div
              className="hidden md:flex"
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                alignItems: "center",
                gap: 4,
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  style={{
                    padding: "7px 16px",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    textDecoration: "none",
                    borderRadius: 9999,
                    transition: "color 0.25s ease, background 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side actions */}
            <div className={scrolled ? "" : "pr-4 md:pr-0"} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                style={{
                  position: "relative",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.7)",
                  padding: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)"; }}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 2,
                      right: 2,
                      background: "#D4A574",
                      color: "#000",
                      fontSize: 9,
                      fontWeight: 700,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Book Repair CTA — desktop */}
              <motion.a
                href="#book"
                id="nav-cta"
                className="hidden md:inline-flex"
                style={{
                  padding: "8px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#000",
                  background: "#fff",
                  borderRadius: 9999,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
                whileHover={{ scale: 1.03, opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Repair
              </motion.a>

              {/* Mobile hamburger */}
              <button
                id="nav-menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  padding: 8,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: 18,
                    height: 1.5,
                    background: "#fff",
                    borderRadius: 2,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    transform: menuOpen
                      ? "translateY(6.5px) rotate(45deg)"
                      : "none",
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 18,
                    height: 1.5,
                    background: "#fff",
                    borderRadius: 2,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  style={{
                    display: "block",
                    width: 18,
                    height: 1.5,
                    background: "#fff",
                    borderRadius: 2,
                    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                    transform: menuOpen
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(32px) saturate(120%)",
              WebkitBackdropFilter: "blur(32px) saturate(120%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 28,
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "14px 32px",
                  borderRadius: 16,
                  letterSpacing: "-0.02em",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#book"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: NAV_LINKS.length * 0.06, duration: 0.4 }}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 24,
                padding: "14px 36px",
                fontSize: 16,
                fontWeight: 600,
                color: "#000",
                background: "#fff",
                borderRadius: 9999,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Book a Repair
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
