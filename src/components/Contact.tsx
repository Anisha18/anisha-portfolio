import { useEffect, useRef } from "react";

const links = [
  {
    label: "email",
    value: "anishadsouza2000@gmail.com",
    href: "mailto:anishadsouza2000@gmail.com?subject=Portfolio Inquiry",
  },
  {
    label: "linkedin",
    value: "/in/anishadsouza",
    href: "https://www.linkedin.com/in/anishadsouza",
    external: true,
  },
  {
    label: "github",
    value: "/Anisha18",
    href: "https://github.com/Anisha18",
    external: true,
  },
  {
    label: "resume",
    value: "AnishaDsouza.pdf",
    href: "/AnishaDsouza.pdf",
    download: true,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const els = container.querySelectorAll<HTMLElement>(".term-reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-termFadeIn");
          else e.target.classList.remove("animate-termFadeIn");
        }),
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="contact" ref={ref} className="mx-auto max-w-5xl px-6 py-24 md:px-12">
        {/* Section header */}
        <div className="term-reveal opacity-0 mb-12 flex items-center gap-4">
          <span className="text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
            // 05
          </span>
          <h2 className="text-2xl font-bold tracking-widest" style={{ color: "var(--green)" }}>
            CONTACT
          </h2>
          <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
        </div>

        <p
          className="term-reveal opacity-0 mb-10 text-sm tracking-wide"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--green)" }}>$</span> open to grad &amp; junior roles,
          internships, and collaborations.
        </p>

        {/* Links as terminal rows */}
        <div
          className="rounded"
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--bg-border)",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download}
              className="term-reveal opacity-0 flex items-center justify-between px-6 py-4 transition-all duration-150 group"
              style={{
                borderBottom:
                  i < links.length - 1 ? "1px solid var(--bg-border)" : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              <div className="flex items-center gap-6">
                <span
                  className="w-20 text-xs tracking-widest"
                  style={{ color: "var(--text-dim)" }}
                >
                  <span style={{ color: "var(--green)" }}>$</span> {link.label}
                </span>
                <span className="text-sm" style={{ color: "var(--text)" }}>
                  {link.value}
                </span>
              </div>
              <span
                className="text-xs transition-colors duration-150"
                style={{ color: "var(--text-dim)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--green)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")
                }
              >
                {link.download ? "↓ download" : "→ open"}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-6 text-center text-xs tracking-widest"
        style={{
          borderColor: "var(--bg-border)",
          color: "var(--text-dim)",
        }}
      >
        <span style={{ color: "var(--text-dim)" }}>© {new Date().getFullYear()} Anisha Dsouza · All rights reserved</span>
      </footer>
    </>
  );
}
