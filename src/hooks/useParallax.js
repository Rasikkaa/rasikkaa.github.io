import { useEffect, useState } from "react";

export function useParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = null;

    const onScroll = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return offset;
}
