import { Component as ScrollNav } from "@/components/ui/scroll-navigation-menu";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Home as HomeIcon, Wrench, ShoppingBag, Info, MessageCircle } from "lucide-react";

const ZIKFIX_MENU = [
  { id: 1, title: "Home",     url: "/",         icon: <HomeIcon className="w-5 h-5" /> },
  { id: 2, title: "Services", url: "/services", icon: <Wrench className="w-5 h-5" /> },
  { id: 3, title: "Shop",     url: "/shop",     icon: <ShoppingBag className="w-5 h-5" /> },
  { id: 4, title: "About",    url: "/about",    icon: <Info className="w-5 h-5" /> },
  { id: 5, title: "Contact",  url: "/contact",  icon: <MessageCircle className="w-5 h-5" /> },
];

export const metadata = {
  title: "Contact — ZIKFIX",
  description: "Get in touch with ZIKFIX for repairs, gadget sales, and inquiries. Find us at Dynamo Junction, Awka.",
};

export default function ContactPage() {
  return (
    <main style={{ background: "var(--color-background)", minHeight: "100vh", paddingTop: 80 }}>
      <ScrollNav menuItems={ZIKFIX_MENU} />
      <BookingSection />
      <FAQSection />
      <FooterSection />
      <WhatsAppFAB />
    </main>
  );
}
