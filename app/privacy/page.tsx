import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main style={{ backgroundColor: "#FAF7F2", minHeight: "100vh", color: "#1a1a1a" }}>
      <Navbar />
      
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "140px 24px 80px" }}>
        <h1 style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 600, marginBottom: 24 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 16, color: "rgba(0,0,0,0.6)", marginBottom: 48 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40, fontSize: 16, lineHeight: 1.8 }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              1. Information We Collect
            </h2>
            <p>
              At ZIKFIX, we collect information that you provide directly to us when you book a repair, make a purchase, or contact us. This may include your name, email address, phone number, and details about your device (such as model and IMEI) necessary for service.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              2. How We Use Your Information
            </h2>
            <p>
              We use the collected information primarily to provide our repair services and fulfill your purchases. We may also use your contact details to send service updates, warranty information, or respond to your inquiries.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              3. Data Protection
            </h2>
            <p>
              Your personal data and device data are treated with the utmost confidentiality. We do not access personal files on your device during repair unless explicitly required for the repair process (e.g., data recovery) and with your direct consent. We recommend backing up and wiping sensitive data before handing over your device.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              4. Cookies
            </h2>
            <p>
              Our website uses essential cookies to ensure basic functionality, such as keeping track of your shopping cart and maintaining session state. We do not use intrusive tracking cookies.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-clash)", fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> support@zikfix.com
              <br />
              <strong>Address:</strong> Dynamo Junction, UNIZIK gate road, Awka, Anambra State, Nigeria
            </p>
          </section>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
