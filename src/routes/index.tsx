import { createFileRoute } from "@tanstack/react-router";
import "../styles/atlas.css";
import { Nav } from "../components/atlas/Nav";
import { Hero, LogoStrip } from "../components/atlas/Hero";
import { Features, HowItWorks, Showcase, Careers, CtaFooter } from "../components/atlas/Sections";
import { useReveal } from "../components/atlas/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlas — Research Made Simple with AI" },
      { name: "description", content: "Atlas reads across millions of papers and your own files, then answers with sources you can trust." },
      { property: "og:title", content: "Atlas — Research Made Simple with AI" },
      { property: "og:description", content: "An AI research workspace that reads, reasons, and cites its work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="atlas-root">
      <div className="bg-field" />
      <div className="bg-noise" />
      <div className="atlas-content">
        <Nav />
        <main>
          <Hero />
          <LogoStrip />
          <Features />
          <HowItWorks />
          <Showcase />
          <Careers />
        </main>
        <CtaFooter />
      </div>
    </div>
  );
}
