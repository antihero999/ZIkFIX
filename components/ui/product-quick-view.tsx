'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, Shield, Truck, Zap, Check } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { useState } from 'react';

interface QuickViewProduct {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string | null;
  category?: string;
}

interface ProductQuickViewProps {
  product: QuickViewProduct | null;
  onClose: () => void;
}

const ANIMATIONS = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  },
  modal: {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 22 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 40,
      transition: { duration: 0.25 },
    },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
  },
  image: {
    initial: { opacity: 0, scale: 1.3, filter: 'blur(12px)', rotate: -8 },
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      filter: 'blur(16px)',
      transition: { duration: 0.2 },
    },
  },
};

function getGradientForBadge(badge?: string | null): string {
  switch (badge) {
    case 'Sale':
      return 'from-red-600 to-orange-800';
    case 'New':
    case 'Flagship':
      return 'from-blue-600 to-indigo-900';
    case 'Popular':
    case 'Rugged':
      return 'from-emerald-600 to-teal-900';
    default:
      return 'from-violet-600 to-purple-900';
  }
}

function getGlowColor(badge?: string | null): string {
  switch (badge) {
    case 'Sale':
      return 'rgba(239,68,68,0.15)';
    case 'New':
    case 'Flagship':
      return 'rgba(59,130,246,0.15)';
    case 'Popular':
    case 'Rugged':
      return 'rgba(16,185,129,0.15)';
    default:
      return 'rgba(139,92,246,0.15)';
  }
}

function getAccentColor(badge?: string | null): string {
  switch (badge) {
    case 'Sale':
      return '#ef4444';
    case 'New':
    case 'Flagship':
      return '#3b82f6';
    case 'Popular':
    case 'Rugged':
      return '#10b981';
    default:
      return '#8b5cf6';
  }
}

export default function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const gradient = getGradientForBadge(product.badge);
  const glowColor = getGlowColor(product.badge);
  const accentColor = getAccentColor(product.badge);

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const features = [
    { label: 'Quality Rating', value: Math.round(product.rating * 20), icon: Star },
    { label: 'Customer Trust', value: Math.min(Math.round((product.reviews / 5) + 60), 99), icon: Shield },
  ];

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="qv-backdrop"
            variants={ANIMATIONS.backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(8px)',
              zIndex: 9990,
              cursor: 'pointer',
            }}
          />

          {/* Modal */}
          <motion.div
            key="qv-modal"
            variants={ANIMATIONS.modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9991,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 24,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 1100,
                maxHeight: '90vh',
                borderRadius: 28,
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                overflow: 'hidden',
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 10,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <X size={18} />
              </button>

              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap' as const,
                  alignItems: 'center',
                  gap: 0,
                  overflowY: 'auto',
                  maxHeight: '90vh',
                }}
              >
                {/* Left — Product Visual */}
                <div
                  style={{
                    flex: '1 1 400px',
                    minHeight: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '48px 24px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Animated ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '75%',
                      aspectRatio: '1',
                      borderRadius: '50%',
                      border: '1px dashed rgba(255,255,255,0.08)',
                      borderLeft: `2px solid ${accentColor}40`,
                    }}
                  />

                  {/* Breathing glow ring */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute rounded-full bg-gradient-to-br ${gradient} blur-2xl opacity-30`}
                    style={{ width: '60%', aspectRatio: '1' }}
                  />

                  {/* Product image container */}
                  <div
                    style={{
                      position: 'relative',
                      width: 300,
                      height: 300,
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      background: 'rgba(0,0,0,0.2)',
                      backdropFilter: 'blur(4px)',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
                    }}
                  >
                    {/* Floating animation */}
                    <motion.div
                      animate={{ y: [-8, 8, -8] }}
                      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <motion.img
                        key={product.id}
                        variants={ANIMATIONS.image}
                        initial="initial"
                        animate="animate"
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: '85%',
                          height: '85%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.4))',
                        }}
                        draggable={false}
                      />
                    </motion.div>
                  </div>

                  {/* Status label */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 24,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 11,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'rgba(255,255,255,0.4)',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '6px 16px',
                      borderRadius: 9999,
                      border: '1px solid rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(8px)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: accentColor,
                        display: 'inline-block',
                        boxShadow: `0 0 8px ${accentColor}`,
                      }}
                    />
                    In Stock • Ready to Ship
                  </div>
                </div>

                {/* Right — Product Details */}
                <motion.div
                  variants={ANIMATIONS.container}
                  initial="hidden"
                  animate="visible"
                  style={{
                    flex: '1 1 380px',
                    padding: '48px 40px 48px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                  }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <motion.span
                      variants={ANIMATIONS.item}
                      style={{
                        display: 'inline-block',
                        width: 'fit-content',
                        padding: '4px 12px',
                        borderRadius: 8,
                        fontSize: 11,
                        fontWeight: 700,
                        background: accentColor,
                        color: '#fff',
                        marginBottom: 8,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {product.badge}
                    </motion.span>
                  )}

                  {/* Category */}
                  {product.category && (
                    <motion.p
                      variants={ANIMATIONS.item}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        marginBottom: 4,
                      }}
                    >
                      {product.category}
                    </motion.p>
                  )}

                  {/* Title */}
                  <motion.h2
                    variants={ANIMATIONS.item}
                    style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      color: '#f5f5f7',
                      marginBottom: 8,
                    }}
                  >
                    {product.name}
                  </motion.h2>

                  {/* Rating */}
                  <motion.div
                    variants={ANIMATIONS.item}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}
                  >
                    <div style={{ display: 'flex', gap: 2 }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(product.rating) ? '#FF9500' : 'none'}
                          stroke={i < Math.floor(product.rating) ? '#FF9500' : '#555'}
                        />
                      ))}
                    </div>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </motion.div>

                  {/* Price */}
                  <motion.div
                    variants={ANIMATIONS.item}
                    style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span
                        style={{
                          fontSize: 16,
                          color: 'rgba(255,255,255,0.3)',
                          textDecoration: 'line-through',
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    )}
                  </motion.div>

                  {/* Feature Bars */}
                  <motion.div
                    variants={ANIMATIONS.item}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 16,
                      padding: 20,
                      marginBottom: 20,
                    }}
                  >
                    {features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={feature.label} style={{ marginBottom: idx < features.length - 1 ? 16 : 0 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, fontSize: 13 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)' }}>
                              <Icon size={14} />
                              {feature.label}
                            </span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                              {feature.value}%
                            </span>
                          </div>
                          <div style={{ height: 6, width: '100%', background: 'rgba(255,255,255,0.06)', borderRadius: 9999, overflow: 'hidden' }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${feature.value}%` }}
                              transition={{ duration: 1, delay: 0.4 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                              style={{
                                height: '100%',
                                borderRadius: 9999,
                                background: accentColor,
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>

                  {/* Trust badges */}
                  <motion.div
                    variants={ANIMATIONS.item}
                    style={{
                      display: 'flex',
                      gap: 16,
                      marginBottom: 24,
                      flexWrap: 'wrap',
                    }}
                  >
                    {[
                      { icon: Truck, text: 'Free Delivery' },
                      { icon: Shield, text: 'Warranty' },
                      { icon: Zap, text: 'Fast Pickup' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.text}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: 12,
                            color: 'rgba(255,255,255,0.45)',
                          }}
                        >
                          <Icon size={13} />
                          {item.text}
                        </div>
                      );
                    })}
                  </motion.div>

                  {/* Actions */}
                  <motion.div variants={ANIMATIONS.item} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <motion.button
                      onClick={handleAddToCart}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        flex: '1 1 200px',
                        padding: '14px 24px',
                        borderRadius: 14,
                        border: 'none',
                        background: added ? '#10b981' : accentColor,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        transition: 'background 0.3s',
                        boxShadow: `0 8px 24px ${accentColor}40`,
                      }}
                    >
                      {added ? (
                        <>
                          <Check size={16} /> Added to Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} /> Add to Cart
                        </>
                      )}
                    </motion.button>

                    <motion.a
                      href="https://wa.me/2347036722204"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        flex: '0 0 auto',
                        padding: '14px 24px',
                        borderRadius: 14,
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'transparent',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: 14,
                        cursor: 'pointer',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      Ask on WhatsApp
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
