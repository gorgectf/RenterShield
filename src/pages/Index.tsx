import { Link } from "react-router-dom";
import { Shield, ExternalLink } from "lucide-react";
import { issueTrees } from "@/data/issueTreeData";
import { walesIssueTrees } from "@/data/walesIssueTreeData";
import { scotlandIssueTrees } from "@/data/scotlandIssueTreeData";
import { northernIrelandIssueTrees } from "@/data/northernIrelandIssueTreeData";
import { useRegion, regionLabels } from "@/contexts/RegionContext";
import { RegionSelector } from "@/components/RegionSelector";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTrustSection } from "@/components/home/HomeTrustSection";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { HomeStickyCta } from "@/components/home/HomeStickyCta";
import { HomeIssueGrid } from "@/components/home/HomeIssueGrid";

const Index = () => {
  const { region } = useRegion();
  const currentTrees =
    region === "northern-ireland"
      ? northernIrelandIssueTrees
      : region === "scotland"
        ? scotlandIssueTrees
        : region === "wales"
          ? walesIssueTrees
          : issueTrees;

  const supportOrg =
    region === "northern-ireland"
      ? {
          name: "Housing Rights",
          url: "https://www.housingrights.org.uk",
          phone: "028 9024 5640",
          phoneHref: "tel:02890245640",
        }
      : region === "scotland"
        ? {
            name: "Shelter Scotland",
            url: "https://www.shelterscotland.org",
            phone: "0808 800 4444",
            phoneHref: "tel:08088004444",
          }
        : region === "wales"
          ? {
              name: "Shelter Cymru",
              url: "https://www.sheltercymru.org.uk",
              phone: "0800 495 495",
              phoneHref: "tel:08004954959",
            }
          : {
              name: "Shelter",
              url: "https://www.shelter.org.uk",
              phone: "0808 800 4444",
              phoneHref: "tel:08088004444",
            };

  const citizensAdvice =
    region === "northern-ireland"
      ? {
          name: "Advice NI",
          url: "https://www.adviceni.net",
        }
      : region === "scotland"
        ? {
            name: "Citizens Advice Scotland",
            url: "https://www.cas.org.uk",
          }
        : region === "wales"
          ? {
              name: "Citizens Advice Wales",
              url: "https://www.citizensadvice.org.uk/wales",
            }
          : {
              name: "Citizens Advice",
              url: "https://www.citizensadvice.org.uk",
            };

  const officialGuidance =
    region === "northern-ireland"
      ? {
          name: "nidirect Renting",
          url: "https://www.nidirect.gov.uk/articles/renting-home-privately",
        }
      : {
          name: "GOV.UK Renting",
          url: "https://www.gov.uk/private-renting",
        };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-primary-foreground border-b border-primary/80">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Shield size={20} />
            <span className="font-display font-bold">RenterShield</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/rights" className="hover:text-primary-foreground/80 transition-colors font-medium">
              Your Rights
            </Link>
            <Link to="/emergency" className="hover:text-primary-foreground/80 transition-colors font-medium">
              Get Help Now
            </Link>
          </div>
        </div>
      </nav>

      <HomeHero region={region} />

      <div className="bg-destructive/10 border-b border-destructive/20">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4 text-sm">
          <p className="text-foreground leading-relaxed">
            <strong>In immediate danger?</strong> Call <a href="tel:999" className="text-destructive font-bold">999</a>. For housing emergencies in {regionLabels[region]}, call {supportOrg.name}: <a href={supportOrg.phoneHref} className="text-destructive font-bold">{supportOrg.phone}</a>
          </p>
          <Link to="/emergency" className="text-accent font-semibold flex-shrink-0 hover:underline">
            All contacts →
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12 pb-28 md:pb-12">
        <div className="flex justify-center mb-8">
          <RegionSelector />
        </div>

        <HomeIssueGrid currentTrees={currentTrees} />
        <HomeTrustSection region={region} />
        <HomeHowItWorks />
        <HomeFaqSection />
      </main>

      <footer className="border-t border-border py-8 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h2 className="font-display font-bold text-foreground mb-3">RenterShield</h2>
              <p className="text-muted-foreground leading-relaxed">
                Free legal guidance for private renters across the UK. Know your rights, take action.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-foreground mb-3">Quick Links</h2>
              <div className="flex flex-col gap-2">
                <Link to="/rights" className="text-muted-foreground hover:text-foreground transition-colors">Know Your Rights</Link>
                <Link to="/emergency" className="text-muted-foreground hover:text-foreground transition-colors">Emergency Contacts</Link>
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-foreground mb-3">External Help</h2>
              <div className="flex flex-col gap-2">
                <a href={supportOrg.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  {supportOrg.name} <ExternalLink size={12} />
                </a>
                <a href={citizensAdvice.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  {citizensAdvice.name} <ExternalLink size={12} />
                </a>
                <a href={officialGuidance.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  {officialGuidance.name} <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>RenterShield provides guidance based on tenancy law for England, Wales, Scotland, and Northern Ireland. This is not legal advice.</p>
          </div>
        </div>
      </footer>

      <HomeStickyCta />
    </div>
  );
};

export default Index;
