export function HomeHowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="mt-20 text-center">
      <h2 id="how-it-works-heading" className="font-display font-bold text-2xl text-foreground">
        How it works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {[
          { step: "1", title: "Choose your issue", desc: "Select the problem you're facing from guided housing categories." },
          { step: "2", title: "Answer a few questions", desc: "Get a route tailored to what is happening with your landlord or tenancy." },
          { step: "3", title: "Leave with a plan", desc: "See practical next steps, template letters, and who to contact if things escalate." },
        ].map((s) => (
          <div key={s.step} className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-bold flex items-center justify-center">
              {s.step}
            </div>
            <h3 className="font-display font-semibold text-foreground mt-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm mt-1 max-w-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
