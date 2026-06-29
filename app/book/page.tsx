import Navbar from "@/components/Navbar";
import BookingSection from "@/components/BookingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "Book a Repair — ZIKFIX",
  description: "Book an appointment for your phone or laptop repair at ZIKFIX Awka.",
};

export default function BookPage() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh", paddingTop: 80 }}>
      <Navbar />
      <HowItWorksSection />
      <BookingSection />
      <FooterSection />
      <WhatsAppFAB />
    </main>
  );
}
