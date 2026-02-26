import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
