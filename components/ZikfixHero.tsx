"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const TOTAL_FRAMES = 203;
const SPRING_CONFIG = { stiffness: 300, damping: 35, restDelta: 0.0001 };

// eslint-disable-next-line
const SCROLL_HINT = "";

/* ── Scroll-linked text beats ─────────────────────────────────────── */
const BEATS = [
  {
    start: 0.0,
    end: 0.28,
    text: "PRECISION REPAIR",
    side: "left" as const,
  },
  {
    start: 0.36,
    end: 0.64,
    text: "CRAFTED TO LAST",
    side: "right" as const,
  },
  {
    start: 0.72,
    end: 1.0,
    text: "LIKE NEW. ALWAYS.",
    side: "left" as const,
  },
];

/* ── Character-by-character reveal ───────────────────────────────── */
function CharReveal({
  text,
  triggered,
  align,
}: {
  text: string;
  triggered: boolean;
  align?: "center" | "left" | "right";
}) {
  const words = text.split(" ");
  let charIndex = 0;

  const justifyClass =
    align === "center"
      ? "justify-center text-center"
      : align === "right"
      ? "justify-end text-right"
      : "justify-start text-left";

  return (
    <span className={`inline-flex flex-wrap ${justifyClass} w-full`} style={{ gap: "0 0.15em" }}>
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-block whitespace-nowrap"
          style={{ letterSpacing: "0em" }}
        >
          {word.split("").map((char) => {
            const currentIdx = charIndex++;
            return (
              <motion.span
                key={currentIdx}
                initial={{ opacity: 0 }}
                animate={triggered ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  delay: currentIdx * 0.03,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/* ── Single scroll beat overlay ──────────────────────────────────── */
function Beat({
  beat,
  progress,
}: {
  beat: (typeof BEATS)[0];
  progress: number;
}) {
  const { start, end } = beat;
  const span = end - start;
  const enterZone = start + span * 0.15;
  const exitZone = end - span * 0.15;

  let opacity = 0;
  let y = 40;

  const beatIndex = BEATS.indexOf(beat);
  const isLeft = beat.side === "left";

  if (progress >= start && progress <= end) {
    if (progress < enterZone) {
      const t = (progress - start) / (enterZone - start);
      opacity = t;
      y = 80 * (1 - t);
    } else if (progress > exitZone) {
      const t = (progress - exitZone) / (end - exitZone);
      opacity = 1 - t;
      y = -40 * t;
    } else {
      opacity = 1;
      y = 0;
    }
  }

  const visible = opacity > 0.01;
  const triggered = opacity > 0.35;

  /* Distinguish tone by beat index */
  const accentColor =
    beatIndex === 0 ? "var(--color-accent-gray)" : beatIndex === 1 ? "var(--color-foreground)" : "var(--color-primary-hover)";

  const align = isLeft ? "left" : "right";

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4 md:px-8"
    >
      <div 
        className="w-full max-w-5xl flex"
        style={{ justifyContent: isLeft ? 'flex-start' : 'flex-end' }}
      >
        {visible && (
        <div style={{ textAlign: align, maxWidth: 400 }}>
          {/* Tiny label */}
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 9,
              letterSpacing: "0.25em",
              color: accentColor,
              textTransform: "uppercase",
              marginBottom: 12,
              opacity: 0.7,
            }}
          >
            {beatIndex === 0
              ? "[ DIAGNOSTIC ]"
              : beatIndex === 1
              ? "[ REPAIR ]"
              : "[ COMPLETE ]"}
          </p>

          <h2
            style={{
              fontWeight: 600,
              fontSize: "clamp(1.3rem, 3.2vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              marginBottom: 0,
            }}
          >
            <CharReveal text={beat.text} triggered={triggered} align={align} />
          </h2>
        </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main component ───────────────────────────────────────────────── */
export default function ZikfixHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const lastDrawnFrame = useRef(-1);

  const [currentProgress, setCurrentProgress] = useState(0);

  /* Scroll progress scoped to the animation-module container */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);

  useMotionValueEvent(smoothProgress, "change", (v: number) => {
    setCurrentProgress(v);
  });

  /* ── Preload frames ────────────────────────────────────────────── */
  useEffect(() => {
    const arr = new Array<HTMLImageElement | null>(TOTAL_FRAMES).fill(null);
    imagesRef.current = arr;

    const firstImg = new Image();
    firstImg.src = `/sequence/ezgif-frame-001.jpg`;
    firstImg.onload = () => {
      arr[0] = firstImg;
      lastDrawnFrame.current = -1;
    };

    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const n = String(i + 1).padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${n}.jpg`;
      const idx = i;
      img.onload = () => { arr[idx] = img; };
      img.onerror = () => {};
    }
  }, []);

  /* ── Canvas RAF draw loop ──────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      lastDrawnFrame.current = -1;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawFrame = () => {
      const raw = smoothProgress.get();
      
      // Implement a 15% dead zone at start and end
      let animProgress = 0;
      if (raw < 0.15) {
        animProgress = 0;
      } else if (raw > 0.85) {
        animProgress = 1;
      } else {
        animProgress = (raw - 0.15) / (0.85 - 0.15);
      }

      const frameIdx = Math.min(
        Math.floor(animProgress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      let actualDrawIdx = -1;
      let img = imagesRef.current[frameIdx];
      if (img) {
        actualDrawIdx = frameIdx;
      } else {
        let fallbackIdx = frameIdx;
        while (fallbackIdx >= 0 && !imagesRef.current[fallbackIdx]) {
          fallbackIdx--;
        }
        if (fallbackIdx >= 0) {
          img = imagesRef.current[fallbackIdx];
          actualDrawIdx = fallbackIdx;
        }
      }

      if (actualDrawIdx === lastDrawnFrame.current) {
        rafRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      if (!img) {
        rafRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      lastDrawnFrame.current = actualDrawIdx;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      /* Fill background so black frames look right */
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      const imgAR = img.naturalWidth / img.naturalHeight;
      const canvasAR = w / h;
      let dw: number, dh: number, dx: number, dy: number;
      if (canvasAR > imgAR) {
        dh = h; dw = dh * imgAR;
        dx = (w - dw) / 2; dy = 0;
      } else {
        dw = w; dh = dw / imgAR;
        dx = 0; dy = (h - dh) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);

      // Cover the Gemini watermark baked into the bottom-right of the original image
      // Assuming the watermark is about 100x100 pixels in the original source image
      const scale = dw / img.naturalWidth;
      const watermarkSize = 120 * scale; 
      ctx.fillStyle = "#0a0a0a"; // Matches the dark background of the frames
      ctx.fillRect(
        dx + dw - watermarkSize, 
        dy + dh - watermarkSize, 
        watermarkSize, 
        watermarkSize
      );

      rafRef.current = requestAnimationFrame(drawFrame);
    };

    rafRef.current = requestAnimationFrame(drawFrame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [smoothProgress]);

  return (
    /* ── Outer cream padding so the dark card "floats" ── */
    <div
      className="bg-[var(--color-background)] px-0 md:px-6 pb-0"
    >
      {/* ── Dark animation card ── */}
      {/*
        IMPORTANT: Do NOT add overflow:hidden here — it breaks position:sticky on children.
        Border-radius clipping is handled by the sticky child below.
      */}
      <div
        ref={containerRef}
        style={{
          height: "600vh",
          position: "relative",
        }}
      >
        {/* Sticky viewport — clip & round here, NOT on the scroll container above */}
        {/* Sticks exactly below the 72px navbar */}
        <div
          className="sticky top-[72px] w-full overflow-hidden bg-[#0a0a0a] rounded-none md:rounded-3xl"
          style={{
            height: "calc(100dvh - 72px)",
          }}
        >
          {/* Dot-matrix texture */}
          <div className="dot-matrix-overlay" />

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Beat overlays */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }}>
            {BEATS.map((beat, i) => (
              <Beat key={i} beat={beat} progress={currentProgress} />
            ))}
          </div>


          {/* Progress bar */}
          <div className="progress-bar-track">
            <motion.div
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, var(--color-accent-gray) 0%, var(--color-foreground) 50%, var(--color-primary) 100%)",
                scaleX: smoothProgress,
                transformOrigin: "left",
              }}
            />
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="scroll-indicator z-30"
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 9,
                letterSpacing: "0.3em",
                color: "#D4A574",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              {SCROLL_HINT}
            </span>
            <div className="scroll-indicator-line" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
