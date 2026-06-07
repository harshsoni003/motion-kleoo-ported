import { Fragment, useState } from "react";

/* mini data-viz "grams" — one per feature card */
const GRAPHS: JSX.Element[] = [
  (<svg viewBox="0 0 72 34" fill="none"><path d="M2 30 16 22 30 25 44 12 58 16 70 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 30 16 22 30 25 44 12 58 16 70 4V34H2Z" fill="currentColor" opacity=".12"/><circle cx="70" cy="4" r="2.4" fill="currentColor"/></svg>),
  (<svg viewBox="0 0 72 34" fill="none"><rect x="3" y="20" width="10" height="12" rx="2" fill="currentColor" opacity=".35"/><rect x="19" y="14" width="10" height="18" rx="2" fill="currentColor" opacity=".55"/><rect x="35" y="8" width="10" height="24" rx="2" fill="currentColor" opacity=".75"/><rect x="51" y="3" width="10" height="29" rx="2" fill="currentColor"/></svg>),
  (<svg viewBox="0 0 72 34" fill="none" stroke="currentColor"><path d="M10 24 34 8M34 8 60 18M10 24 60 18M34 8 30 30" strokeWidth="1.4" opacity=".5"/><circle cx="10" cy="24" r="3.2" fill="currentColor" stroke="none"/><circle cx="34" cy="8" r="3.8" fill="currentColor" stroke="none"/><circle cx="60" cy="18" r="3.2" fill="currentColor" stroke="none"/><circle cx="30" cy="30" r="2.6" fill="currentColor" stroke="none"/></svg>),
  (<svg viewBox="0 0 72 34" fill="none"><path d="M2 17C10 4 18 4 26 17S42 30 50 17 66 4 70 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="26" cy="17" r="2.2" fill="currentColor"/><circle cx="50" cy="17" r="2.2" fill="currentColor"/></svg>),
  (<svg viewBox="0 0 72 34" fill="none"><path d="M3 28 69 7" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" opacity=".55"/><circle cx="12" cy="23" r="2.4" fill="currentColor"/><circle cx="28" cy="24" r="2.4" fill="currentColor"/><circle cx="40" cy="15" r="2.4" fill="currentColor"/><circle cx="54" cy="16" r="2.4" fill="currentColor"/><circle cx="64" cy="9" r="2.4" fill="currentColor"/></svg>),
  (<svg viewBox="0 0 72 34" fill="none" stroke="currentColor"><path d="M14 17 52 7M14 17 52 27" strokeWidth="1.4" opacity=".5"/><circle cx="14" cy="17" r="4" fill="currentColor" stroke="none"/><circle cx="55" cy="7" r="3" fill="currentColor" stroke="none"/><circle cx="55" cy="27" r="3" fill="currentColor" stroke="none"/></svg>),
];

const FEATURES = [
  { t: "Ask in plain language", d: "Pose a question the way you’d ask a colleague. Atlas searches millions of papers, reports, and your own files at once." },
  { t: "Every claim, cited", d: "Inline citations link straight back to the source sentence. Hover to verify, click to read the original." },
  { t: "Multi-model intelligence", d: "Each question is routed to the model that answers it best — reasoning, retrieval, or raw speed." },
  { t: "Living documents", d: "Briefs that update themselves. When new research lands, your summary quietly catches up." },
  { t: "Your knowledge, connected", d: "Drop in PDFs, links, and notes. Atlas builds a map of what you know and what’s missing." },
  { t: "Share-ready in seconds", d: "Turn any thread into a polished brief, a deck, or a link your whole team can open." },
];

export function Features() {
  return (
    <section className="section" id="features">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Features</span>
          <h2 className="section-title">Everything you need to think clearly</h2>
          <p className="section-sub">A research workspace that reads, reasons, and remembers — so you can spend your time deciding, not digging.</p>
        </div>
        <div className="feat-bento">
          {FEATURES.map((f, idx) => (
            <div className={"feat-card reveal" + (idx === 0 ? " feat-card--lg" : "")} style={{ transitionDelay: `${(idx % 3) * 70}ms` }} key={f.t}>
              <div className="feat-head">
                <span className="feat-num">{String(idx + 1).padStart(2, "0")}</span>
                {idx !== 0 && <span className="feat-graph">{GRAPHS[idx]}</span>}
              </div>
              <div className="feat-body">
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
              {idx === 0 && <div className="feat-bigviz">{GRAPHS[0]}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", t: "Ask or upload", d: "Type a question in plain language, or drop in the documents you’re working from." },
  { n: "02", t: "Atlas synthesizes", d: "It reads across every source, compares findings, and assembles a cited answer in seconds." },
  { n: "03", t: "Ship the work", d: "Export a brief, share a live link, or keep pulling the thread deeper. It’s yours." },
];

export function HowItWorks() {
  return (
    <section className="section how" id="usecases">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">From question to answer in three moves</h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step reveal" style={{ transitionDelay: `${i * 90}ms` }} key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
          <div className="steps-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  const sidebar = ["Market landscape", "Competitor scan", "Q3 literature review", "Customer interviews"];
  const sources: [string, string][] = [
    ["Dense Passage Retrieval for Open-Domain QA", "arXiv · 2020"],
    ["Hybrid Search at Scale", "Pinecone · 2024"],
    ["ReAct: Reasoning + Acting in LLMs", "arXiv · 2023"],
    ["Self-RAG: Learning to Retrieve & Critique", "arXiv · 2023"],
  ];
  return (
    <section className="section showcase" id="product">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">The workspace</span>
          <h2 className="section-title">A single surface for everything you’re researching</h2>
        </div>
        <div className="window reveal">
          <div className="win-bar">
            <span className="tl" /><span className="tl" /><span className="tl" />
            <div className="win-url">atlas.research/workspace</div>
          </div>
          <div className="win-body">
            <aside className="win-side">
              <div className="ws-logo"><span className="logo-dot" /> Atlas</div>
              {sidebar.map((x, i) => (
                <div className={"ws-item" + (i === 2 ? " active" : "")} key={x}>{x}</div>
              ))}
              <div className="ws-add">+ New thread</div>
            </aside>
            <main className="win-main">
              <div className="ws-q">What are the leading approaches to retrieval-augmented research?</div>
              <div className="ws-a">
                <p>Three approaches dominate the recent literature. <span className="cite">[1]</span> Dense retrieval pairs neural embeddings with a re-ranking pass; <span className="cite">[2]</span> hybrid systems blend keyword and vector search for precision; and <span className="cite">[3]</span> agentic pipelines let the model plan its own multi-step lookups.</p>
                <p>For long-form synthesis, agentic pipelines consistently produce the most complete answers, at the cost of latency. <span className="cite">[4]</span></p>
              </div>
              <div className="ws-sources">
                <div className="ws-sources-h">4 sources</div>
                {sources.map(([t, m], i) => (
                  <div className="ws-source" key={t}><span className="src-n">{i + 1}</span><div><div className="src-t">{t}</div><div className="src-m">{m}</div></div></div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

const JOBS = [
  { role: "Senior Software Engineer", type: "Hybrid", ago: "3d ago" },
  { role: "Senior Product Manager", type: "Onsite", ago: "1d ago" },
  { role: "Research Engineer", type: "Remote", ago: "16h ago" },
];
const JOB_DESC = "Step into the engine room of a fast-growing research company and help shape how the world learns. You’ll own systems that turn open questions into trusted answers.";

export function Careers() {
  return (
    <section className="section careers" id="careers">
      <div className="wrap careers-grid">
        <div className="careers-left reveal">
          <span className="eyebrow">Careers</span>
          <h2 className="careers-title">Let’s Change How Modern Enterprise Teams Function</h2>
          <p className="careers-p">Building a generational company requires exceptional, hard-working people. We’re tackling the hardest problems in knowledge work that no one else has dared to.</p>
          <div className="investors">
            <div className="inv-label">Our Investors</div>
            <div className="inv-row">
              <div className="inv"><span className="inv-yc">Y</span> Combinator</div>
              <div className="inv inv-accel">Accel</div>
              <div className="inv"><span className="inv-sb" /> SoftBank</div>
            </div>
          </div>
        </div>
        <div className="careers-right">
          {JOBS.map((j, i) => (
            <a className="job reveal" href="#cta" style={{ transitionDelay: `${i * 80}ms` }} key={j.role}>
              <div className="job-head">
                <span className="job-role">{j.role}</span>
                <span className="job-dot">•</span>
                <span className="job-meta">{j.type}</span>
                <span className="job-dot">•</span>
                <span className="job-meta">{j.ago}</span>
              </div>
              <p className="job-desc">{JOB_DESC}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export function CtaFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const cols = [
    { h: "Product", links: ["Features", "Workspace", "Models", "Pricing", "Changelog"] },
    { h: "Company", links: ["About", "Careers", "Blog", "Customers", "Press"] },
    { h: "Resources", links: ["Docs", "API", "Community", "Status", "Security"] },
  ];
  return (
    <footer className="footer" id="cta">
      <div className="wrap">
        <div className="cta reveal">
          <h2 className="cta-title">Research Made Simple with AI</h2>
          <p className="cta-sub">Join thousands of teams who replaced the blank page with a first draft that cites its work.</p>
          <form className="cta-form" onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setDone(true); }}>
            {done ? (
              <div className="cta-done"><CheckIcon /> You’re on the list — check your inbox.</div>
            ) : (
              <Fragment>
                <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Get started</button>
              </Fragment>
            )}
          </form>
        </div>

        <div className="foot-grid">
          <div className="foot-brand">
            <div className="ws-logo"><span className="logo-dot" /> Atlas</div>
            <p>The research workspace that reads, reasons, and cites — so your team can decide faster.</p>
            <div className="foot-social">
              <a href="#top" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.5h3.3l-7.2 8.3 8.5 11.2h-6.6l-5.2-6.8-6 6.8H1.7l7.7-8.8L1.3 2.5H8l4.7 6.2 5.5-6.2Zm-1.2 17.8h1.8L7.1 4.3H5.2l11.8 16Z"/></svg></a>
              <a href="#top" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg></a>
              <a href="#top" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.4H3.6V21h3.3V8.4ZM5.3 3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM21 13.7c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.4H10.6c0 .9 0 12.6 0 12.6h3.3v-7c0-.4 0-.7.1-1 .3-.7.9-1.3 1.8-1.3 1.3 0 1.8 1 1.8 2.4V21H21s0-6.6 0-7.3Z"/></svg></a>
            </div>
          </div>
          {cols.map((c) => (
            <div className="foot-col" key={c.h}>
              <div className="foot-h">{c.h}</div>
              {c.links.map((l) => <a key={l} href="#top">{l}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© 2026 Atlas Research, Inc.</span>
          <div className="foot-legal"><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}
