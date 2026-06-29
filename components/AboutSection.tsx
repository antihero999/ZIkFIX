"use client";

import { InstagramScroll } from "./InstagramScroll";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#000",
        position: "relative",
        width: "100%",
      }}
    >
      <InstagramScroll />
    </section>
  );
}

