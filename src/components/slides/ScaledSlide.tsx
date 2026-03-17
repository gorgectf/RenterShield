import { ReactNode, useRef, useEffect, useState } from "react";

interface ScaledSlideProps {
  children: ReactNode;
}

export default function ScaledSlide({ children }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      setScale(Math.min(clientWidth / 1920, clientHeight / 1080));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="slide-container w-full h-full">
      <div className="slide-wrapper" style={{ transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
