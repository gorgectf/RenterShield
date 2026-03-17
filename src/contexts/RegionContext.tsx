import { createContext, useContext, useState, ReactNode } from "react";

export type Region = "england" | "wales" | "scotland";

export const regionLabels: Record<Region, string> = {
  england: "England",
  wales: "Wales",
  scotland: "Scotland",
};

export const regions: Region[] = ["england", "wales", "scotland"];

interface RegionContextType {
  region: Region;
  setRegion: (r: Region) => void;
}

const RegionContext = createContext<RegionContextType>({
  region: "england",
  setRegion: () => {},
});

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>(() => {
    const saved = localStorage.getItem("rentershield-region");
    if (saved === "wales" || saved === "scotland") return saved;
    return "england";
  });

  const handleSetRegion = (r: Region) => {
    setRegion(r);
    localStorage.setItem("rentershield-region", r);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion: handleSetRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export const useRegion = () => useContext(RegionContext);
