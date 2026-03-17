import { useState, useCallback, useEffect } from "react";
import ScaledSlide from "@/components/slides/ScaledSlide";
import { slides } from "@/components/slides/slideData";
import { ChevronLeft, ChevronRight, Maximize } from "lucide-react";

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(total - 1, c + 1)), [total]);

  const goFullscreen = () => document.documentElement.requestFullscreen?.();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F5") { e.preventDefault(); goFullscreen(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current];

  return (
    <div className="h-screen w-screen flex flex-col bg-foreground overflow-hidden">
      {/* Slide area */}
      <div className="flex-1 min-h-0">
        <ScaledSlide>
          <SlideComponent />
        </ScaledSlide>
      </div>

      {/* Controls */}
      <div className="h-16 flex items-center justify-between px-6 bg-primary/95 backdrop-blur">
        <div className="flex items-center gap-4">
          <button onClick={prev} disabled={current === 0} className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/10 text-primary-foreground disabled:opacity-30 hover:bg-primary-foreground/20 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <span className="text-primary-foreground/70 text-sm font-display tabular-nums">
            {current + 1} / {total}
          </span>
          <button onClick={next} disabled={current === total - 1} className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/10 text-primary-foreground disabled:opacity-30 hover:bg-primary-foreground/20 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnail dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-accent" : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
            />
          ))}
        </div>

        <button onClick={goFullscreen} className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors">
          <Maximize size={18} />
        </button>
      </div>
    </div>
  );
}
