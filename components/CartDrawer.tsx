"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/CartContext";
import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect } from "react";


export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = "Hello ZikFix, I would like to order the following items:%0A%0A";
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.name} (${item.price})%0A`;
    });
    
    // Attempt to calculate total if possible (assuming prices are plain numbers or formatted with commas)
    try {
      const total = items.reduce((acc, item) => {
        const num = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
        return acc + (isNaN(num) ? 0 : num * item.quantity);
      }, 0);
      if (total > 0) {
        message += `%0A*Estimated Total: ₦${total.toLocaleString()}*%0A`;
      }
    } catch(e) {}
    
    message += "%0APlease let me know the availability and delivery options.";
    
    window.open(`https://wa.me/2347036722204?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 9998,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 400,
              background: "var(--color-card)",
              borderLeft: "1px solid var(--color-border-subtle)",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-10px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div style={{ padding: "24px", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <ShoppingBag size={20} color="var(--color-foreground)" />
                <h2 style={{ fontFamily: "'Clash Display', 'Syne', sans-serif", fontSize: 20, fontWeight: 600, color: "var(--color-foreground)" }}>
                  Your Cart
                </h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} style={{ background: "none", border: "none", color: "var(--color-muted-foreground)", cursor: "pointer" }}>
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
              {items.length === 0 ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "var(--color-muted-foreground)", gap: 12 }}>
                  <ShoppingBag size={48} opacity={0.2} />
                  <p style={{ fontFamily: "Inter, sans-serif" }}>Your cart is empty.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {items.map((item) => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid var(--color-border-subtle)" }}>
                      <div>
                        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "var(--color-foreground)", fontSize: 15, marginBottom: 4 }}>
                          {item.name}
                        </p>
                        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "var(--color-muted-foreground)" }}>
                          {item.price} × {item.quantity}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: "rgba(255,0,0,0.1)", border: "none", padding: 8, borderRadius: 8, color: "#ff4444", cursor: "pointer", transition: "0.2s" }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div style={{ padding: "24px", borderTop: "1px solid var(--color-border-subtle)", background: "var(--color-background)" }}>
                <button
                  onClick={handleCheckout}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: "var(--color-foreground)",
                    color: "var(--color-background)",
                    border: "none",
                    borderRadius: 12,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    gap: 8,
                    alignItems: "center",
                    transition: "transform 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  Checkout via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "none",
                    border: "none",
                    color: "var(--color-muted-foreground)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    marginTop: 12,
                    cursor: "pointer",
                  }}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
