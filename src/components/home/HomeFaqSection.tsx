import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is RenterShield free?",
    a: "Yes — completely free. The goal is to give renters clear, practical housing guidance without a paywall.",
  },
  {
    q: "Is this legal advice?",
    a: "No. RenterShield provides informational guidance based on tenancy law and support pathways, but it is not a substitute for professional legal advice.",
  },
  {
    q: "Which regions are covered?",
    a: "The site currently covers England, Wales, Scotland, and Northern Ireland with region-specific guidance and support links.",
  },
  {
    q: "What if I am worried about retaliation or eviction?",
    a: "Use the guided issue flows as early as possible, keep records, and contact the relevant housing support organisation in your region if things are escalating.",
  },
];

export function HomeFaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="mt-20">
      <div className="flex items-center justify-center gap-2 mb-8">
        <h2 id="faq-heading" className="font-display font-bold text-2xl text-foreground text-center">
          Frequently asked questions
        </h2>
      </div>

      <div className="rounded-[2rem] border border-border bg-card px-5 md:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-base text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
