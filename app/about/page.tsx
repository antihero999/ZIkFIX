import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "About — ZIKFIX Awka",
  description: "Learn more about ZIKFIX, Awka's premier 24/7 gadget repair shop located at Dynamo Junction.",
};

export default function AboutPage() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh", paddingTop: 80 }}>
      <Navbar />
      <AboutSection />
      <WhyChooseUsSection />
      <FooterSection />
      <WhatsAppFAB />
    </main>
  );
}
