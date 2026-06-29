"use client";

import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export const ProductCard = ({ 
  product, 
  isDark = true,
  onToggleWishlist 
}: {
  product: any;
  isDark?: boolean;
  onToggleWishlist?: (id: string, state: boolean) => void;
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product.id, !isWishlisted);
  };

  const displayPrice = product.salePrice || product.price;
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.3s ease",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)"
          : "0 4px 24px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", background: "#0a0a0a" }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Wishlist */}
        <button
          onClick={handleWishlistClick}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s ease, transform 0.2s ease",
            color: isWishlisted ? "#ff4d6d" : "rgba(255,255,255,0.7)",
            transform: isHovered ? "scale(1)" : "scale(0.85)",
            opacity: isHovered ? 1 : 0,
          }}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Sale badge */}
        {product.salePrice && (
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              padding: "5px 12px",
              borderRadius: 9999,
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 11,
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            −{discount}%
          </div>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                padding: "8px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px 24px" }}>
        {/* Category */}
        <p
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 8,
          }}
        >
          {product.category}
        </p>

        {/* Name */}
        <h3
          style={{
            fontWeight: 600,
            fontSize: 17,
            lineHeight: 1.3,
            color: "#fff",
            marginBottom: 16,
            letterSpacing: "-0.01em",
          }}
        >
          {product.name}
        </h3>

        {/* Price + Add to cart row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              ₦{displayPrice.toLocaleString()}
            </span>
            {product.salePrice && (
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "line-through",
                }}
              >
                ₦{product.price.toLocaleString()}
              </span>
            )}
          </div>

          {product.inStock && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: displayPrice,
                  image: product.image,
                });
              }}
              style={{
                padding: "8px 16px",
                borderRadius: 9999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: isHovered ? "rgba(255,255,255,0.1)" : "transparent",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                letterSpacing: "0.02em",
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
