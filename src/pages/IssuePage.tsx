import { useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { issueTrees } from "@/data/issueTreeData";
import { walesIssueTrees } from "@/data/walesIssueTreeData";
import { scotlandIssueTrees } from "@/data/scotlandIssueTreeData";
import { useRegion, regionLabels } from "@/contexts/RegionContext";
import { ArrowLeft, ArrowRight, Copy, Check, RotateCcw, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function IssuePage() {
  const { issueId } = useParams<{ issueId: string }>();
  const { region } = useRegion();

  const allTrees = region === "scotland" ? scotlandIssueTrees : region === "wales" ? walesIssueTrees : issueTrees;
  const tree = allTrees.find((t) => t.id === issueId);

  const [history, setHistory] = useState<string[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState(tree?.startNodeId ?? "");
  const [copied, setCopied] = useState(false);

  const node = tree?.nodes[currentNodeId];

  const goTo = useCallback((nextId: string) => {
    setHistory((h) => [...h, currentNodeId]);
    setCurrentNodeId(nextId);
  }, [currentNodeId]);

  const goBack = useCallback(() => {
    setHistory((h) => {
      const prev = [...h];
      const last = prev.pop();
      if (last) setCurrentNodeId(last);
      return prev;
    });
  }, []);

  const restart = useCallback(() => {
    setHistory([]);
    setCurrentNodeId(tree?.startNodeId ?? "");
  }, [tree]);

  const copyLetter = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Letter copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  }, []);

  if (!tree || !node) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-muted-foreground">Issue not found.</p>
          <Link to="/" className="text-accent underline mt-4 inline-block">Go home</Link>
        </div>
      </div>
    );
  }

  const progress = node.result ? 100 : Math.min(90, ((history.length + 1) / 6) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">{tree.icon}</span>
              <h1 className="font-display font-bold text-foreground text-lg">{tree.title}</h1>
            </div>
          </div>
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
            {region === "wales" ? "Wales" : "England"}
          </span>
          <button onClick={restart} className="text-muted-foreground hover:text-foreground transition-colors" title="Start over">
            <RotateCcw size={18} />
          </button>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-muted">
          <div className="h-full bg-accent transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Question mode */}
        {node.question && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="font-display font-bold text-2xl text-foreground leading-tight">
              {node.question}
            </h2>
            {node.info && (
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed bg-muted/50 rounded-xl p-4">
                ℹ️ {node.info}
              </p>
            )}
            <div className="flex flex-col gap-3 mt-8">
              {node.options?.map((opt) => (
                <button
                  key={opt.nextId}
                  onClick={() => goTo(opt.nextId)}
                  className="text-left px-6 py-4 rounded-xl border border-border bg-card hover:border-accent hover:bg-accent/5 transition-all group flex items-center justify-between"
                >
                  <span className="font-medium text-foreground">{opt.label}</span>
                  <ArrowRight size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Result mode */}
        {node.result && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-8">
              <h2 className="font-display font-bold text-2xl text-foreground leading-tight">
                {node.result.title}
              </h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {node.result.summary}
              </p>
            </div>

            <h3 className="font-display font-semibold text-lg text-foreground mb-4">Steps to take</h3>
            <ol className="space-y-3 mb-8">
              {node.result.steps.map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full bg-accent/15 text-accent font-display font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>

            {node.result.letterTemplate && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg text-foreground">📝 Template Letter</h3>
                  <button
                    onClick={() => copyLetter(node.result!.letterTemplate!)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy letter"}
                  </button>
                </div>
                <pre className="bg-card border border-border rounded-xl p-5 text-sm text-foreground whitespace-pre-wrap leading-relaxed font-sans overflow-x-auto">
                  {node.result.letterTemplate}
                </pre>
              </div>
            )}

            {node.result.legalRef && (
              <div className="bg-muted/50 rounded-xl p-4 text-sm text-muted-foreground">
                <strong>Legal references:</strong> {node.result.legalRef}
              </div>
            )}
          </div>
        )}

        {/* Back button */}
        {history.length > 0 && (
          <button
            onClick={goBack}
            className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Back to previous question
          </button>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-6">
        <div className="max-w-3xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>RenterShield is for guidance only — not legal advice.</p>
          <a href={region === "scotland" ? "https://www.shelterscotland.org" : region === "wales" ? "https://www.sheltercymru.org.uk" : "https://www.shelter.org.uk"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
            Need urgent help? Contact {region === "scotland" ? "Shelter Scotland" : region === "wales" ? "Shelter Cymru" : "Shelter"} <ExternalLink size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
