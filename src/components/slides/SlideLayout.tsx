import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "dark" | "light" | "accent";
}

export default function SlideLayout({ children, variant = "dark" }: SlideLayoutProps) {
  const bg = {
    dark: "bg-slide-bg",
    light: "bg-slide-bg-light",
    accent: "bg-slide-accent",
  }[variant];

  const text = {
    dark: "text-slide-text",
    light: "text-slide-text-dark",
    accent: "text-slide-text",
  }[variant];

  return (
    <div className={`slide-content w-full h-full ${bg} ${text} relative overflow-hidden`}>
      {children}
    </div>
  );
}
