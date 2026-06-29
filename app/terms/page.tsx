import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import React from "react";

export default function TermsOfServicePage() {
  return (
    <main style={{ backgroundColor: "#FAF7F2", minHeight: "100vh", color: "#1a1a1a" }}>
      <Navbar />
      
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "140px 24px 80px" }}>
        <h1 style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 600, marginBottom: 24 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", marginBottom: 48 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, fontSize: 16, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              1. Repair Services
            </h2>
            <p>
              ZIKFIX provides professional repair services for mobile phones, laptops, and other electronic gadgets. While we exercise the highest level of care, electronics repair inherently carries risks. We are not liable for pre-existing underlying faults that manifest during or after the repair process.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              2. Data Loss Liability
            </h2>
            <p>
              It is the customer's responsibility to back up all data before submitting a device for repair. ZIKFIX is not liable for any loss of data, software, or media that may occur during the repair process.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              3. Sales and Returns
            </h2>
            <p>
              Gadgets and accessories purchased from ZIKFIX come with a standard limited warranty against manufacturer defects. Returns are accepted within 7 days of purchase, provided the item is in its original, undamaged condition with all packaging and receipts.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              4. Abandoned Devices
            </h2>
            <p>
              Devices left at our shop for over 60 days after repair completion notification will be considered abandoned. We reserve the right to recycle or sell these devices to recover repair costs.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              5. Warranty
            </h2>
            <p>
              Our repairs carry a limited warranty covering the specific parts replaced and the associated labor. This warranty is voided by subsequent physical damage, water damage, or tampering by third parties.
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
