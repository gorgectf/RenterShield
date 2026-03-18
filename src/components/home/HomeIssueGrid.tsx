import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface IssueTreeItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface HomeIssueGridProps {
  currentTrees: IssueTreeItem[];
}

export function HomeIssueGrid({ currentTrees }: HomeIssueGridProps) {
  return (
    <section id="issue-explorer" aria-labelledby="issue-explorer-heading" className="scroll-mt-24">
      <h2 id="issue-explorer-heading" className="font-display font-bold text-2xl text-foreground text-center mb-2">
        What’s your issue?
      </h2>
      <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
        Pick the situation you are facing and get step-by-step help designed to move you from uncertainty to action.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {currentTrees.map((issue) => (
          <Link
            key={issue.id}
            to={`/issue/${issue.id}`}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent hover:shadow-lg transition-all group min-h-[220px] flex flex-col"
          >
            <span className="text-3xl">{issue.icon}</span>
            <h3 className="font-display font-bold text-lg text-foreground mt-4">{issue.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed flex-1">{issue.description}</p>
            <div className="flex items-center gap-1 text-accent text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
              Get help <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
