import { Link } from "react-router-dom";
import { Shield, ArrowRight } from "lucide-react";
import { issueTrees } from "@/data/issueTreeData";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">RenterShield</h1>
          <p className="text-primary-foreground/70 mt-4 text-lg max-w-lg mx-auto">
            Know your rights. Get personalised legal guidance. Take action to protect your home — all for free.
          </p>
        </div>
      </header>

      {/* Issue cards */}
      <main className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {issueTrees.map((issue) => (
            <Link
              key={issue.id}
              to={`/issue/${issue.id}`}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all group"
            >
              <span className="text-3xl">{issue.icon}</span>
              <h2 className="font-display font-bold text-lg text-foreground mt-4">{issue.title}</h2>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{issue.description}</p>
              <div className="flex items-center gap-1 text-accent text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                Get help <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* How it works */}
        <section className="mt-16 text-center">
          <h2 className="font-display font-bold text-2xl text-foreground">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              { step: "1", title: "Choose your issue", desc: "Select the problem you're facing from our guided categories." },
              { step: "2", title: "Answer a few questions", desc: "We'll ask simple questions to understand your exact situation." },
              { step: "3", title: "Get your action plan", desc: "Receive tailored steps, template letters, and legal references." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-bold flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mt-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pitch deck links */}
        <section className="mt-16 mb-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/pitch"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display font-semibold hover:opacity-90 transition-opacity"
          >
            <Presentation size={18} /> View Pitch Deck
          </Link>
          <button
            onClick={downloadPitchDeck}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-display font-semibold hover:opacity-90 transition-opacity"
          >
            <Download size={18} /> Download .pptx
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>RenterShield provides guidance based on English tenancy law. This is not legal advice. For urgent issues, contact <a href="https://www.shelter.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Shelter</a> or <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Citizens Advice</a>.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
