"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function InstagramScroll() {
  return (
    <div className="w-full bg-black overflow-hidden relative">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-center text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[#f5f5f7] leading-tight">
              Stay Connected <br />
              <span
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none"
                style={{
                  background: "linear-gradient(to right, #fb923c, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                @ZikFix
              </span>
            </h2>
          </>
        }
      >
        <Image
          src="/img 16.png"
          alt="Zikfix Instagram Profile"
          fill
          className="object-cover object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
