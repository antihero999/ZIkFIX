"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20 w-full"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        margin: "0 auto 4rem auto", // Add bottom margin for spacing
        maxWidth: "64rem",
        width: "100%",
        textAlign: "center"
      }}
      className="max-w-5xl mx-auto text-center w-full"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        margin: "0 auto",
        maxWidth: "340px",
        width: "100%",
        aspectRatio: "340 / 700", // Enforce strict proportion so it never crops on narrow mobile screens
        position: "relative"
      }}
      className="rounded-[40px] md:rounded-[48px] bg-black"
    >
      {/* Glowing background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #fb923c 100%)",
          filter: "blur(70px)",
          opacity: 0.5,
          zIndex: -1,
          transform: "scale(1.05)",
        }}
      />
      <div 
        style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
        className="rounded-[40px] md:rounded-[48px]"
      >
        {children}
      </div>
    </motion.div>
  );
};

