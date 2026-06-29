import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroStatement from "@/components/HeroStatement";
import ZikfixHero from "@/components/ZikfixHero";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import HowItWorksSection from "@/components/HowItWorksSection";
import ShopSection from "@/components/ShopSection";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import RepairEstimatorSection from "@/components/RepairEstimatorSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import RepairJourneySection from "@/components/ui/scroll-card";

export const metadata: Metadata = {
  title: "ZIKFIX — Professional Phone Repair & Gadget Sales | Awka, Nigeria",
  description:
    "Expert phone & laptop repair plus premium gadget sales at Dynamo Junction, Awka. Open 24/7. Quality parts, 5-star service. Book a repair today.",
  keywords: [
    "phone repair Awka",
    "laptop repair Awka",
    "ZIKFIX",
    "gadget sales Nigeria",
    "iPhone repair Awka",
    "screen replacement",
    "Dynamo Junction",
    "UNIZIK repair",
  ],
  openGraph: {
    title: "ZIKFIX — Phone Repair & Gadget Sales | Awka",
    description:
      "Professional phone & laptop repair plus quality gadgets — open 24/7 at Dynamo Junction, Awka.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh" }}>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero statement — headline + CTAs */}
      <HeroStatement />

      {/* 3. Animation module — dark card with scroll-scrub canvas */}
      <ZikfixHero />

      {/* 4. Trust strip — social proof pills */}
      <TrustStrip />

      {/* 5. About Section */}
      <AboutSection />

      {/* 6. Services */}
      <ServicesSection />

      {/* 6.5. Repair Journey — scroll stacking cards */}
      <RepairJourneySection />

      {/* 7. Repair Estimator */}
      <RepairEstimatorSection />

      {/* 8. How It Works */}
      <HowItWorksSection />

      {/* 9. Shop */}
      <ShopSection />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Booking Form */}
      <BookingSection />

      {/* 13. Footer */}
      <FooterSection />
    </main>
  );
}
