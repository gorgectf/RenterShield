import { useRegion, regions, regionLabels } from "@/contexts/RegionContext";

export function RegionSelector() {
  const { region, setRegion } = useRegion();

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 bg-muted rounded-xl p-1">
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            region === r
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {regionLabels[r]}
        </button>
      ))}
    </div>
  );
}
