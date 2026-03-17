import { existsSync, statSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { DEFAULT_PITCH_DECK_OUTPUT, generateRenterShieldPitchDeck } from "@/lib/pitchDeckGenerator";

describe("pitch deck generator", () => {
  it(
    "creates a revised PPTX file in public",
    async () => {
      const outputPath = await generateRenterShieldPitchDeck();
      expect(outputPath.endsWith(DEFAULT_PITCH_DECK_OUTPUT)).toBe(true);
      expect(existsSync(outputPath)).toBe(true);
      expect(statSync(outputPath).size).toBeGreaterThan(10_000);
    },
    60_000,
  );
});
