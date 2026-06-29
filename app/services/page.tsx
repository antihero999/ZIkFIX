import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import RepairEstimatorSection from "@/components/RepairEstimatorSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "Services — ZIKFIX Phone & Gadget Repair",
  description: "Explore our premium repair services. We fix screens, batteries, water damage, and more with high-quality parts in Awka.",
};

export default function ServicesPage() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh", paddingTop: 80 }}>
      <Navbar />
      <ServicesSection />
      <RepairEstimatorSection />
      <FooterSection />
      <WhatsAppFAB />
    </main>
  );
}
