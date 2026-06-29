"use client";
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/feature-card';
import { Smartphone, BatteryCharging, Droplets, Unlock, Laptop, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <Smartphone size={32} />,
    title: "Screen Repair",
    description: "Cracked or shattered screen? Restored to perfect condition in under an hour.",
    accentColor: "purple" as const,
  },
  {
    icon: <BatteryCharging size={32} />,
    title: "Battery Replacement",
    description: "Original quality batteries. Your device, full power again.",
    accentColor: "pink" as const,
  },
  {
    icon: <Droplets size={32} />,
    title: "Water Damage Repair",
    description: "Dropped it in water? We've revived devices others gave up on.",
    accentColor: "gold" as const,
  },
  {
    icon: <Unlock size={32} />,
    title: "Phone Unlocking",
    description: "Network or passcode locked? We get you back in, safely.",
    accentColor: "purple" as const,
  },
  {
    icon: <Laptop size={32} />,
    title: "Laptop Repair",
    description: "From slow performance to hardware failure — we handle it all.",
    accentColor: "pink" as const,
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Phone Sales",
    description: "Quality new and refurbished phones at honest prices.",
    accentColor: "gold" as const,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#FAF7F2] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <span className="text-[#8B5CF6] uppercase text-sm font-semibold tracking-widest">
          WHAT WE DO
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-3 mb-4 font-display text-[#2B2420]">
          Everything Your Device Needs
        </h2>
        <p className="text-[#6B6258] text-lg">
          From cracked screens to dead batteries — one stop, fixed fast.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <FeatureCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
