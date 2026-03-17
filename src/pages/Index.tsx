import { Link } from "react-router-dom";
import { Shield, Presentation, Download } from "lucide-react";
import { downloadPitchDeck } from "@/lib/generatePptx";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center mb-8">
        <Shield size={40} className="text-accent-foreground" />
      </div>
      <h1 className="font-display text-4xl font-bold text-foreground tracking-tight">RenterShield</h1>
      <p className="text-muted-foreground mt-3 text-center max-w-md">
        Know your rights. Take action. Protect your home.
      </p>
      <div className="flex gap-4 mt-10">
        <Link
          to="/pitch"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-display font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          <Presentation size={22} />
          View Pitch Deck
        </Link>
        <button
          onClick={downloadPitchDeck}
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-display font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          <Download size={22} />
          Download .pptx
        </button>
      </div>
    </div>
  );
};

export default Index;
