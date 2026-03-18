import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={isUser ? "max-w-[85%] rounded-3xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground" : "max-w-[85%] rounded-3xl rounded-bl-md border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm"}
      >
        <div className="prose prose-sm max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-inherit prose-strong:text-inherit prose-li:text-inherit prose-a:text-accent">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
