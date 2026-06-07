import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "Product", href: "#product" },
    { label: "Usecases", href: "#usecases" },
  ];
  return (
    <header className="nav-outer">
      <nav className="nav-pill">
        <a href="#top" className="logo" aria-label="Atlas home">
          <span className="logo-dot" />
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a href="#cta" className="btn-signup">Sign up</a>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span />
        </button>
      </nav>
      {open && (
        <div className="nav-mobile">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#cta" className="btn-signup" onClick={() => setOpen(false)}>Sign up</a>
        </div>
      )}
    </header>
  );
}
