import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
