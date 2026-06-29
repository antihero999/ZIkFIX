"use client";

import { ArrowUp } from "lucide-react";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ScrollToTop = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-white/20 p-1">
        <button
          type="button"
          onClick={handleScrollTop}
          className="rounded-full p-2.5 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
