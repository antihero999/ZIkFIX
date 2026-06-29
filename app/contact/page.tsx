import Navbar from "@/components/Navbar";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "Contact — ZIKFIX",
  description: "Get in touch with ZIKFIX for repairs, gadget sales, and inquiries. Find us at Dynamo Junction, Awka.",
};

export default function ContactPage() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh", paddingTop: 80 }}>
      <Navbar />
      <BookingSection />
      <FAQSection />
      <FooterSection />
      <WhatsAppFAB />
    </main>
  );
}
