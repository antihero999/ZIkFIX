"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VideoScrollHero } from "@/components/ui/video-scroll-hero";
import { Smartphone, Laptop, Headphones, Watch, Gamepad2, Cpu, ShoppingCart, Eye, ArrowRight, Star, Zap, Shield, Truck, Plus, X as XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useCart } from "@/lib/CartContext";
import ProductQuickView from "@/components/ui/product-quick-view";

/* ─── DATA ─── */

const CATEGORIES = [
  { name: "iPhone", icon: Smartphone, color: "#FF6B35" },
  { name: "Mac", icon: Laptop, color: "#0066CC" },
  { name: "Headphones", icon: Headphones, color: "#8B5CF6" },
  { name: "Watch", icon: Watch, color: "#10B981" },
  { name: "Gaming", icon: Gamepad2, color: "#EC4899" },
  { name: "Components", icon: Cpu, color: "#F59E0B" },
];

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    tagline: "All out Pro.",
    price: "₦2,411,789",
    oldPrice: "₦2,800,000",
    badge: "NEW",
    image: "/iphone mockup.png",
    bgGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    textColor: "#fff",
  },
  {
    id: 2,
    name: "MacBook Pro 14\"",
    tagline: "The magic of Mac.",
    price: "₦2,843,750",
    badge: "HOT",
    image: "/laptop mockup.png",
    bgGradient: "linear-gradient(135deg, #e8eaf6 0%, #f5f5f5 100%)",
    textColor: "#1d1d1f",
  },
  {
    id: 3,
    name: "iPad Pro M5",
    tagline: "Supercharged by M5.",
    price: "₦2,100,000",
    badge: "NEW",
    image: "/ipad mockup.png",
    bgGradient: "linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%)",
    textColor: "#1d1d1f",
  },
];

const TRENDING_PRODUCTS = [
  { id: 1, name: "Refurbished iPhone 15 Pro", price: "₦850,000", oldPrice: "₦1,200,000", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800", rating: 4.9, reviews: 142, badge: "Sale", category: "iPhone" },
  { id: 2, name: "MacBook Air M3", price: "₦1,650,000", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800", rating: 4.8, reviews: 98, badge: null, category: "Mac" },
  { id: 3, name: "iPad Air M2", price: "₦950,000", image: "/ipad mockup.png", rating: 4.7, reviews: 67, badge: "Popular", category: "Components" },
  { id: 4, name: "AirPods Pro 2", price: "₦145,000", oldPrice: "₦180,000", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=800", rating: 4.9, reviews: 304, badge: "Sale", category: "Headphones" },
  { id: 5, name: "Apple Watch Series 10", price: "₦420,000", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=800", rating: 4.8, reviews: 156, badge: null, category: "Watch" },
  { id: 6, name: "Elite Wireless Gamepad", price: "₦28,000", image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=800", rating: 4.6, reviews: 89, badge: "New", category: "Gaming" },
  { id: 7, name: "iPhone 17 Pro", price: "₦2,411,789", image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?q=80&w=800", rating: 5.0, reviews: 210, badge: "Flagship", category: "iPhone" },
  { id: 8, name: "MacBook Pro 16\"", price: "₦3,200,000", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800", rating: 4.9, reviews: 178, badge: null, category: "Mac" },
  { id: 9, name: "Samsung Galaxy S24 Ultra", price: "₦1,850,000", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800", rating: 4.8, reviews: 120, badge: "Popular", category: "Components" },
  { id: 10, name: "Sony WH-1000XM5", price: "₦380,000", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800", rating: 4.9, reviews: 310, badge: null, category: "Headphones" },
  { id: 11, name: "Apple Watch Ultra 2", price: "₦950,000", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800", rating: 5.0, reviews: 85, badge: "Rugged", category: "Watch" },
  { id: 12, name: "Nintendo Switch OLED", price: "₦350,000", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=800", rating: 4.8, reviews: 540, badge: "Sale", category: "Gaming" },
];

const ACCESSORIES = [
  { id: 201, name: "Premium Silicone Case", price: "₦15,000", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800", isNew: true },
  { id: 202, name: "MagSafe Charger", price: "₦25,000", image: "https://images.unsplash.com/photo-1628815113969-0487917b3e36?q=80&w=800", isNew: true },
  { id: 203, name: "USB-C Fast Charger", price: "₦12,000", image: "https://images.unsplash.com/photo-1618438592675-af85e4c0bfe0?q=80&w=800", isNew: false },
  { id: 204, name: "JBL Charge 5 Speaker", price: "₦140,000", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800", isNew: false },
  { id: 205, name: "10000mAh Power Bank", price: "₦18,000", image: "https://images.unsplash.com/photo-1585338107529-13afc25806f9?q=80&w=800", isNew: true },
  { id: 206, name: "Razer DeathAdder V3 Pro", price: "₦120,000", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800", isNew: false },
];

/* ─── ANIMATION VARIANTS ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── COMPONENTS ─── */

function SectionTitle({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      style={{ textAlign: "center", marginBottom: 56 }}
    >
      <h2 style={{
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: 700,
        color: dark ? "#fff" : "#1d1d1f",
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        marginBottom: 12,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          color: dark ? "rgba(255,255,255,0.5)" : "#86868b",
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.5,
        }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ─── MAIN PAGE ─── */

export default function ShopPage() {
  const { addToCart } = useCart();
  const [quickViewProduct, setQuickViewProduct] = useState<(typeof TRENDING_PRODUCTS)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return TRENDING_PRODUCTS;
    return TRENDING_PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main style={{ background: "#fafafa", minHeight: "100vh" }}>
      <Navbar />

      {/* ====== HERO BANNER with Screenshot 1 (MacBook on dark bg) ====== */}
      <section style={{
        background: "#000",
        position: "relative",
        overflow: "hidden",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60, // navbar offset
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80%",
          background: "radial-gradient(circle, rgba(0,102,204,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", display: "flex", flexWrap: "wrap" as const, alignItems: "center", gap: 48, position: "relative", zIndex: 1, width: "100%" }}>
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ flex: "1 1 400px", minWidth: 320 }}
          >
            <span style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 20,
              background: "rgba(0,102,204,0.2)",
              color: "#2997ff",
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
              letterSpacing: "0.05em",
            }}>
              ZIKFIX STORE
            </span>
            <h1 style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              color: "#f5f5f7",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 20,
            }}>
              Premium Gadgets.<br />
              <span style={{ color: "#2997ff" }}>Unbeatable Prices.</span>
            </h1>
            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 500,
            }}>
              Explore our curated collection of premium smartphones, laptops, and accessories. Tested, trusted, and delivered to your doorstep.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
              <a href="#trending" style={{
                padding: "14px 32px",
                borderRadius: 980,
                background: "#2997ff",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                transition: "transform 0.2s, background 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}>
                Shop Now <ArrowRight size={16} />
              </a>
              <a href="#categories" style={{
                padding: "14px 32px",
                borderRadius: 980,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                transition: "transform 0.2s, background 0.2s",
              }}>
                Browse Categories
              </a>
            </div>
          </motion.div>

          {/* Right Image - Screenshot 1 (MacBook) */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ flex: "1 1 500px", minWidth: 320, position: "relative" }}
          >
            <Image
              src="/screenshot 1.png"
              alt="MacBook Pro"
              width={800}
              height={500}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ====== TRUST BAR ====== */}
      <section style={{
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        padding: "24px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "center", flexWrap: "wrap" as const, gap: 40 }}>
          {[
            { icon: Truck, text: "Free Delivery in Awka" },
            { icon: Shield, text: "Quality Guaranteed" },
            { icon: Star, text: "5-Star Reviews" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Icon size={20} style={{ color: "#2997ff" }} />
                <span style={{ fontSize: 14, fontWeight: 500, color: "#1d1d1f" }}>{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ====== WIDE PRODUCT BANNER — Screenshot 5 (iPhone lineup) ====== */}
      <section style={{ background: "#f5f5f7", padding: "80px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", color: "#86868b", textTransform: "uppercase" as const }}>
              Smartphones
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.03em", marginTop: 8 }}>
              iPhone. <span style={{ color: "#86868b" }}>Designed to be loved.</span>
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: 1000, margin: "40px auto 0", padding: "0 24px" }}
        >
          <Image
            src="/Screenshot 5.png"
            alt="iPhone lineup"
            width={1200}
            height={400}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </motion.div>
      </section>

      {/* ====== CATEGORIES ====== */}
      <section id="categories" style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <SectionTitle title="Browse Categories" subtitle="Find exactly what you need" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 20,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <motion.div
                  key={cat.name}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => {
                    setActiveCategory(isActive ? null : cat.name);
                    // Scroll to trending section
                    document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  style={{
                    background: isActive ? `${cat.color}15` : "#f5f5f7",
                    borderRadius: 24,
                    padding: "32px 16px",
                    textAlign: "center",
                    cursor: "pointer",
                    border: isActive ? `2px solid ${cat.color}` : "1px solid rgba(0,0,0,0.04)",
                    transition: "border 0.3s, background 0.3s",
                  }}
                >
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${cat.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={28} style={{ color: cat.color }} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: isActive ? cat.color : "#1d1d1f" }}>{cat.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ====== THE LATEST — Feature Cards (Apple Store style) ====== */}
      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 600, color: "#1d1d1f", marginBottom: 40 }}>
              The latest. <span style={{ color: "#86868b" }}>Take a look at what's new, right now.</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", gap: 20, overflowX: "auto" as const, paddingBottom: 16, scrollSnapType: "x mandatory" }}>
            {FEATURED_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -8 }}
                style={{
                  flex: "0 0 360px",
                  minHeight: 500,
                  borderRadius: 28,
                  background: product.bgGradient,
                  padding: 32,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  scrollSnapAlign: "start",
                }}
              >
                <span style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  background: product.badge === "NEW" ? "#FF6B35" : "#EC4899",
                  color: "#fff",
                  marginBottom: 16,
                }}>
                  {product.badge}
                </span>
                <h3 style={{ fontSize: 28, fontWeight: 700, color: product.textColor, marginBottom: 4 }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 16, color: product.textColor, opacity: 0.7, marginBottom: 8 }}>
                  {product.tagline}
                </p>
                <p style={{ fontSize: 14, color: product.textColor, opacity: 0.6 }}>
                  From {product.price}
                </p>
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: "55%" }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WIDE BANNER — Screenshot 4 (MacBook + iPad side by side) ====== */}
      <section style={{ background: "#e8ecf0", padding: "0", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Image
            src="/Screenshot 4.png"
            alt="MacBook Air and iPad Air"
            width={1400}
            height={400}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", padding: "40px 24px 60px" }}>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>
            MacBook Air & iPad Air
          </h3>
          <p style={{ fontSize: 16, color: "#86868b" }}>Strikingly thin. Insanely powerful.</p>
        </div>
      </section>

      {/* ====== VIDEO SCROLL HERO ====== */}
      <VideoScrollHero
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        enableAnimations={true}
        startScale={0.4}
      />

      {/* ====== WIDE BANNER — Screenshot 2 (iPhones being held) ====== */}
      <section style={{ background: "#f5f5f7", padding: "0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Image
            src="/Screenshot 2.png"
            alt="iPhone comparison"
            width={1400}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", padding: "40px 24px 60px" }}>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>
            Trade in your old device
          </h3>
          <p style={{ fontSize: 16, color: "#86868b", maxWidth: 500, margin: "0 auto" }}>Bring your old phone, get instant value on your next purchase.</p>
        </div>
      </section>

      {/* ====== WIDE BANNER — Screenshot 3 (MacBook + iPad workspace) ====== */}
      <section style={{ background: "#e8e8ed", padding: "0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Image
            src="/Screenshot 3.png"
            alt="MacBook and iPad workspace"
            width={1400}
            height={400}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", padding: "40px 24px 60px" }}>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>
            Work Smarter. Create Better.
          </h3>
          <p style={{ fontSize: 16, color: "#86868b", maxWidth: 500, margin: "0 auto" }}>The perfect duo for productivity and creativity.</p>
        </div>
      </section>

      {/* ====== TRENDING PRODUCTS — Product Grid ====== */}
      <section id="trending" style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <SectionTitle
            title={activeCategory ? `${activeCategory} Products` : "Trending Products"}
            subtitle={activeCategory ? undefined : "Products other customers are buying at the moment"}
          />

          {/* Active filter indicator */}
          {activeCategory && (
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 20px",
                  borderRadius: 9999,
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "#fff",
                  color: "#1d1d1f",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <XIcon size={14} /> Clear filter: {activeCategory}
              </button>
            </div>
          )}

          <motion.div
            key={activeCategory || 'all'}
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  border: "1px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s",
                }}
                onHoverStart={() => {}}
              >
                {/* Image */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1",
                  background: "#f5f5f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain", padding: 24 }}
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                  {product.badge && (
                    <span style={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      padding: "4px 10px",
                      borderRadius: 8,
                      fontSize: 11,
                      fontWeight: 700,
                      background: product.badge === "Sale" ? "#FF3B30" : product.badge === "New" || product.badge === "Flagship" ? "#FF6B35" : "#2997ff",
                      color: "#fff",
                      zIndex: 2,
                    }}>
                      {product.badge}
                    </span>
                  )}
                  {/* Quick view overlay */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(product);
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      cursor: "pointer",
                    }}
                    className="product-overlay"
                  >
                    <span style={{
                      padding: "10px 20px",
                      background: "#fff",
                      borderRadius: 980,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#1d1d1f",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}>
                      <Eye size={14} /> Quick View
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div style={{ padding: "16px 20px 20px" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", marginBottom: 6, lineHeight: 1.3 }}>
                    {product.name}
                  </h4>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "#FF9500" : "none"} stroke={i < Math.floor(product.rating) ? "#FF9500" : "#ccc"} />
                    ))}
                    <span style={{ fontSize: 12, color: "#86868b", marginLeft: 4 }}>({product.reviews})</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f" }}>{product.price}</span>
                      {product.oldPrice && (
                        <span style={{ fontSize: 13, color: "#86868b", textDecoration: "line-through" }}>{product.oldPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id.toString(),
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        });
                      }}
                      style={{
                        background: "#f5f5f7",
                        border: "none",
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: "#1d1d1f",
                      }}
                      title="Add to Cart"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ====== ACCESSORIES — Apple Store Style ====== */}
      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 600, color: "#1d1d1f", marginBottom: 40 }}>
              Accessories. <span style={{ color: "#86868b" }}>Essentials that pair perfectly with your favorite devices.</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: "48px 32px",
                display: "flex",
                flexDirection: "column" as const,
                justifyContent: "center",
                border: "1px solid rgba(0,0,0,0.04)",
                minHeight: 300,
              }}
            >
              <h3 style={{ fontSize: 36, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>Here and wow.</h3>
              <p style={{ fontSize: 16, color: "#86868b", lineHeight: 1.5 }}>
                The accessories you love.<br />In a fresh mix of colors.
              </p>
            </motion.div>

            {/* Accessory Items */}
            {ACCESSORIES.map((acc, i) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                whileHover={{ y: -6 }}
                style={{
                  background: "#fff",
                  borderRadius: 28,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column" as const,
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  border: "1px solid rgba(0,0,0,0.04)",
                  minHeight: 300,
                  justifyContent: "center",
                }}
              >
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: "#f5f5f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  overflow: "hidden",
                  position: "relative",
                }}>
                  {acc.image ? (
                    <Image src={acc.image} alt={acc.name} fill style={{ objectFit: "cover" }} sizes="80px" />
                  ) : (
                    <ShoppingCart size={32} style={{ color: "#2997ff" }} />
                  )}
                </div>
                {acc.isNew && (
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#FF6B35", marginBottom: 8 }}>New</span>
                )}
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "#1d1d1f", marginBottom: 8 }}>{acc.name}</h4>
                <p style={{ fontSize: 14, color: "#86868b", marginBottom: 12 }}>{acc.price}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({
                      id: acc.id.toString(),
                      name: acc.name,
                      price: acc.price,
                      image: acc.image || "",
                    });
                  }}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 980,
                    background: "#2997ff",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    marginTop: "auto",
                  }}
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
        padding: "80px 24px",
        textAlign: "center",
      }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#f5f5f7", marginBottom: 16 }}>
            Ready to upgrade your tech?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            Visit us at Dynamo Junction, Awka or reach us on WhatsApp for instant support.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const }}>
            <Link href="/" style={{
              padding: "14px 32px",
              borderRadius: 980,
              background: "#2997ff",
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}>
              Back to Home <ArrowRight size={16} />
            </Link>
            <Link href="/#book" style={{
              padding: "14px 32px",
              borderRadius: 980,
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontWeight: 500,
              fontSize: 15,
              textDecoration: "none",
            }}>
              Book a Repair
            </Link>
          </div>
        </motion.div>
      </section>

      <FooterSection />

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Quick View hover CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .product-overlay { opacity: 0 !important; }
        div:hover > .product-overlay { opacity: 1 !important; }
      ` }} />
    </main>
  );
}
