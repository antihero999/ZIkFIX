"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/card";
import Link from "next/link";

const GADGETS = [
  {
    id: "shop-iphone",
    name: "Refurbished iPhones",
    category: "Smartphones",
    price: 350000,
    salePrice: 320000,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800",
    rating: 5.0,
    reviews: 142,
    inStock: true,
  },
  {
    id: "shop-samsung",
    name: "Samsung Galaxy Series",
    category: "Smartphones",
    price: 250000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800",
    rating: 4.8,
    reviews: 98,
    inStock: true,
  },
  {
    id: "shop-macbook",
    name: "MacBook Pro / Air",
    category: "Laptops",
    price: 650000,
    salePrice: 620000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
    rating: 4.9,
    reviews: 210,
    inStock: true,
  },
  {
    id: "shop-airpods",
    name: "AirPods Pro",
    category: "Audio",
    price: 45000,
    image: "/earbud.png",
    rating: 4.7,
    reviews: 185,
    inStock: true,
  },
  {
    id: "shop-accessories",
    name: "Premium Chargers",
    category: "Accessories",
    price: 15000,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800",
    rating: 4.6,
    reviews: 324,
    inStock: true,
  },
  {
    id: "shop-smartwatches",
    name: "Apple & Galaxy Watches",
    category: "Wearables",
    price: 120000,
    salePrice: 110000,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    id: "shop-gamepad",
    name: "Elite Wireless Gamepad",
    category: "Gaming",
    price: 28000,
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?q=80&w=800",
    rating: 4.9,
    reviews: 304,
    inStock: true,
  },
  {
    id: "shop-mouse",
    name: "Ergonomic RGB Mouse",
    category: "Gaming",
    price: 15000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800",
    rating: 4.6,
    reviews: 56,
    inStock: true,
  },
  {
    id: "shop-keyboard",
    name: "Mechanical RGB Keyboard",
    category: "Gaming",
    price: 35000,
    salePrice: 29500,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800",
    rating: 4.9,
    reviews: 210,
    inStock: true,
  },
  {
    id: "shop-earbuds",
    name: "Pro Noise-Cancelling Earbuds",
    category: "Audio",
    price: 25000,
    salePrice: 21000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800",
    rating: 4.7,
    reviews: 112,
    inStock: true,
  },
  {
    id: "shop-headset",
    name: "Premium Wireless Headset",
    category: "Audio",
    price: 45000,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800",
    rating: 4.8,
    reviews: 89,
    inStock: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ShopSection() {
  return (
    <section
      id="shop"
      style={{
        background: "var(--color-background)",
        paddingTop: 80,
        paddingBottom: 100,
        paddingLeft: 24,
        paddingRight: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,116,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          marginBottom: 64,
          maxWidth: 680,
          margin: "0 auto 64px",
          position: "relative",
          zIndex: 1,
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
          [ PRE-OWNED & NEW ]
        </span>
        <h2
          style={{
            fontWeight: 600,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.1,
            color: "var(--color-foreground)",
            marginBottom: 20,
            letterSpacing: "-0.02em",
          }}
        >
          Premium Gadgets.
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--color-muted-foreground)",
          }}
        >
          Explore our curated selection of high-end accessories, robust gaming gear, and pristine smartphones. Tested for perfection.
        </p>
      </motion.div>

      {/* Grid of Product Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 24,
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {GADGETS.map((gadget) => (
          <motion.div key={gadget.id} variants={cardVariants}>
            <ProductCard product={gadget} isDark={true} />
          </motion.div>
        ))}
      </motion.div>

      {/* Shop All Gadgets Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 64,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link
          href="/shop"
          className="btn-outline"
          style={{
            padding: "16px 40px",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: "var(--radius-btn)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff",
            background: "rgba(255,255,255,0.03)",
            display: "inline-block",
          }}
        >
          Shop All Gadgets
        </Link>
      </motion.div>
    </section>
  );
}
