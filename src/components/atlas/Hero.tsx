import { useEffect, useRef, useState } from "react";
import { BrandMark, type BrandName } from "./BrandMark";

const MODELS = ["Claude 3.7 Sonnet", "Atlas Opus", "GPT-4o", "Gemini 1.5 Pro", "Llama 3.1 405B"];
const SUGGESTIONS = [
  "Generate a mock interview",
  "Summarize this research paper",
  "Compare two emerging markets",
  "Draft a literature review",
];

function SparkIcon() {
  return <svg className="spark" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2c.4 3.4 1.6 4.6 5 5-3.4.4-4.6 1.6-5 5-.4-3.4-1.6-4.6-5-5 3.4-.4 4.6-1.6 5-5Zm6 9c.2 1.7.8 2.3 2.5 2.5-1.7.2-2.3.8-2.5 2.5-.2-1.7-.8-2.3-2.5-2.5 1.7-.2 2.3-.8 2.5-2.5Z"/></svg>;
}
function CheckIcon() {
  return <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function ChatInput() {
  const [value, setValue] = useState("");
  const [model, setModel] = useState(MODELS[0]);
  const [modelOpen, setModelOpen] = useState(false);
  const [sent, setSent] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [thinking, setThinking] = useState(false);
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const phIndex = useRef(0);
  const [ph, setPh] = useState(SUGGESTIONS[0]);

  useEffect(() => {
    if (value || sent) return;
    const id = setInterval(() => {
      phIndex.current = (phIndex.current + 1) % SUGGESTIONS.length;
      setPh(SUGGESTIONS[phIndex.current]);
    }, 2600);
    return () => clearInterval(id);
  }, [value, sent]);

  const autoGrow = () => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 180) + "px";
  };

  const RESPONSE = `Here's a structured plan. I pulled from 14 sources and grouped the findings into three themes — methodology, key results, and open questions — each with inline citations you can expand. Want me to turn this into a shareable brief?`;

  const submit = (q?: string) => {
    const text = (q ?? value).trim();
    if (!text) return;
    setSent(text);
    setValue("");
    setAnswer("");
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      let i = 0;
      const id = setInterval(() => {
        i += 2;
        setAnswer(RESPONSE.slice(0, i));
        if (i >= RESPONSE.length) clearInterval(id);
      }, 14);
    }, 1100);
  };

  const reset = () => { setSent(null); setAnswer(""); setThinking(false); };

  return (
    <div className="chat-wrap">
      <div className="chat-card">
        <div className="chat-top">
          <SparkIcon />
          <span>Unlock more features with <strong>Pro</strong></span>
        </div>

        {!sent ? (
          <textarea
            ref={taRef}
            className="chat-input"
            placeholder={ph}
            value={value}
            rows={1}
            onChange={(e) => { setValue(e.target.value); autoGrow(); }}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } }}
          />
        ) : (
          <div className="chat-thread">
            <div className="chat-q">{sent}</div>
            {thinking ? (
              <div className="chat-thinking">
                <span className="dot" /><span className="dot" /><span className="dot" />
                <em>Searching sources…</em>
              </div>
            ) : (
              <div className="chat-a">{answer}<span className="caret" /></div>
            )}
          </div>
        )}

        <div className="chat-bottom">
          <button className="round-btn" aria-label="Add" onClick={reset}>
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
          </button>

          <div className="model-select">
            <button className="model-btn" onClick={() => setModelOpen(!modelOpen)}>
              {model}
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {modelOpen && (
              <div className="model-menu">
                {MODELS.map((m) => (
                  <button key={m} className={m === model ? "active" : ""} onClick={() => { setModel(m); setModelOpen(false); }}>
                    {m}
                    {m === model && <CheckIcon />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-actions">
            <button className="icon-btn" aria-label="Attach">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 11.5 12.5 20a5 5 0 0 1-7-7l8-8a3.3 3.3 0 0 1 4.7 4.7l-8 8a1.7 1.7 0 0 1-2.4-2.4l7.4-7.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="send-btn" aria-label="Send" onClick={() => submit()}>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="chip-row">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="chip" onClick={() => submit(s)}>{s}</button>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-col">
          <div className="hero-badge reveal in">
            <span className="hero-badge-dot" />
            Now with multi-model reasoning
          </div>
          <h1 className="hero-title reveal in">
            Research Made Simple with AI
          </h1>
          <p className="hero-sub reveal in">
            Ask anything. Atlas reads across millions of papers and your own files,
            then answers with sources you can trust.
          </p>
          <ChatInput />
        </div>
      </div>
    </section>
  );
}

export function LogoStrip() {
  const names: BrandName[] = ["openai", "claude", "meta", "perplexity", "replicate"];
  return (
    <section className="logo-strip reveal">
      <div className="wrap">
        <div className="logo-row">
          {names.map((n) => <BrandMark key={n} name={n} />)}
        </div>
      </div>
    </section>
  );
}
