'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RepairCardData {
  step: string;
  title: string;
  description: string;
  image: string;
  color: string;
  accentColor: string;
  rotation: string;
}

const repairCardsData: RepairCardData[] = [
  {
    step: '01',
    title: 'Diagnosis & Assessment',
    description:
      'Every repair starts with a thorough diagnostic. We use precision tools to identify every issue — visible or hidden — before we touch a single screw.',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800',
    color: '#111111',
    accentColor: '#8B5CF6',
    rotation: 'rotate-1',
  },
  {
    step: '02',
    title: 'Precision Disassembly',
    description:
      'Our technicians carefully disassemble your device with anti-static tools and surgical precision. Every component is catalogued and handled with care.',
    image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800',
    color: '#0a0a0a',
    accentColor: '#EC4899',
    rotation: '-rotate-1',
  },
  {
    step: '03',
    title: 'Expert Repair',
    description:
      'Using premium-grade parts and micro-soldering techniques, we restore your device to peak performance. Board-level repairs are our specialty.',
    image: 'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=800',
    color: '#111111',
    accentColor: '#D4A574',
    rotation: 'rotate-1',
  },
  {
    step: '04',
    title: 'Quality Tested & Sealed',
    description:
      'Before handoff, every device undergoes rigorous testing — display, battery, sensors, connectivity. Sealed, warrantied, and returned like new.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
    color: '#0a0a0a',
    accentColor: '#2997ff',
    rotation: '-rotate-1',
  },
];

const ScrollCard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Animate the right-side heading — fully visible through the entire scroll range
  const headingOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [1, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
    >
      {/* Section Header — not sticky, just a regular block */}
      <div className="pt-24 pb-12 px-6 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}
        >
          <span
            className="block mb-4"
            style={{
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-accent-gray)',
            }}
          >
            [ OUR PROCESS ]
          </span>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--color-foreground)',
              marginBottom: 16,
            }}
          >
            The Repair{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Journey.
            </span>
          </h2>
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              lineHeight: 1.7,
              color: 'var(--color-muted-foreground)',
              maxWidth: 560,
              margin: '0 auto',
            }}
          >
            From broken to brand-new — here&apos;s how we bring your device back to life.
          </p>
        </motion.div>
      </div>

      {/* Cards + Sticky Label Layout */}
      <div className="relative w-full bg-black">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-6 md:px-16 max-w-[1200px] mx-auto">
          {/* Left: Stacking Cards */}
          <div className="grid gap-2 w-full lg:w-[58%]">
            {repairCardsData.map((card, i) => (
              <figure
                key={i}
                className="sticky top-0 h-screen grid place-content-center"
                style={{ zIndex: i + 1 }}
              >
                <article
                  className={`relative overflow-hidden h-auto min-h-[320px] md:h-80 w-full rounded-2xl ${card.rotation} p-0 grid place-content-center transition-transform duration-500`}
                  style={{
                    backgroundColor: card.color,
                    border: `1px solid rgba(255,255,255,0.08)`,
                    boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${card.accentColor}15`,
                  }}
                >
                  {/* Card image background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.2,
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${card.color} 30%, transparent 100%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10">
                    {/* Step number */}
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 11,
                        letterSpacing: '0.2em',
                        color: card.accentColor,
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: 16,
                        opacity: 0.9,
                      }}
                    >
                      STEP {card.step}
                    </span>

                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: 12,
                        lineHeight: 1.2,
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.6)',
                        maxWidth: 400,
                      }}
                    >
                      {card.description}
                    </p>

                    {/* Accent line */}
                    <div
                      style={{
                        marginTop: 24,
                        width: 48,
                        height: 3,
                        borderRadius: 2,
                        background: `linear-gradient(90deg, ${card.accentColor}, transparent)`,
                      }}
                    />
                  </div>
                </article>
              </figure>
            ))}
          </div>

          {/* Right: Sticky Side Text — stays visible for the entire scroll range */}
          <motion.div
            className="hidden lg:flex sticky top-0 h-screen items-center justify-center w-[42%]"
            style={{ opacity: headingOpacity }}
          >
            <div className="text-left max-w-[320px]">
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: 'var(--color-accent-gray)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                [ SCROLL TO EXPLORE ]
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-foreground)',
                  marginBottom: 20,
                }}
              >
                The ZikFix <br />
                <span style={{ color: 'var(--color-accent-gray)' }}>Process</span> ✨
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: 'var(--color-muted-foreground)',
                  marginBottom: 32,
                }}
              >
                Four meticulous steps that transform your broken device into a masterpiece. Every. Single. Time.
              </p>

              {/* CTA */}
              <a
                href="#book"
                className="btn-primary inline-flex"
              >
                Book a Repair
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile-only CTA at the bottom */}
      <div className="lg:hidden text-center pb-16 px-6">
        <a href="#book" className="btn-primary inline-flex">
          Start Your Repair
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;
