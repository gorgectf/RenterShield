import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function SeoHead({ title, description, canonicalPath = "/" }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    const ensureMeta = (name: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.name = name;
        document.head.appendChild(element);
      }
      return element;
    };

    const ensureLink = (rel: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }
      return element;
    };

    ensureMeta("description").content = description;
    ensureMeta("viewport").content = "width=device-width, initial-scale=1";
    ensureLink("canonical").href = new URL(canonicalPath, window.location.origin).toString();
  }, [title, description, canonicalPath]);

  return null;
}
