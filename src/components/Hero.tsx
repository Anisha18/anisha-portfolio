import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Data Engineer",
  "Backend Developer",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Scroll-triggered fade in
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = container.querySelectorAll<HTMLElement>(".term-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-termFadeIn");
          else entry.target.classList.remove("animate-termFadeIn");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[88vh] flex-col justify-center px-6 md:px-16 lg:px-24"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--green-glow)" }}
      />

      {/* Terminal prompt lines */}
      <div className="max-w-3xl space-y-4">
        <p
          className="term-reveal opacity-0 text-xs tracking-widest"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--text-dim)" }}>// 01</span>  <span style={{ color: "var(--green)" }}>▶</span> whoami
        </p>

        <h1
          className="term-reveal opacity-0 text-5xl font-bold leading-none tracking-tight md:text-7xl lg:text-8xl"
          style={{ color: "var(--text)" }}
        >
          Anisha
          <br />
          <span style={{ color: "var(--green)" }}>D'souza</span>
        </h1>

        <p
          className="term-reveal opacity-0 text-sm tracking-widest md:text-base"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--green)" }}>$</span> role ={" "}
          <span style={{ color: "var(--text)" }}>
            &quot;{displayed}&quot;
          </span>
          <span className="cursor-blink" />
        </p>

        <p
          className="term-reveal opacity-0 text-xs tracking-widest"
          style={{ color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--green)" }}>$</span> location ={" "}
          <span style={{ color: "var(--text)" }}>&quot;Melbourne, AU&quot;</span>
        </p>

        {/* CTA */}
        <div className="term-reveal opacity-0 flex flex-wrap gap-4 pt-6">
          <a
            href="#projects"
            className="rounded px-5 py-2.5 text-xs font-medium tracking-widest transition-all duration-200"
            style={{
              backgroundColor: "var(--green)",
              color: "#0a0a0a",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--green-dim)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--green)")
            }
          >
            ./projects
          </a>
          <a
            href="#contact"
            className="rounded px-5 py-2.5 text-xs font-medium tracking-widest transition-all duration-200"
            style={{
              border: "1px solid var(--bg-border)",
              color: "var(--text-dim)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--green-dim)";
              (e.currentTarget as HTMLElement).style.color = "var(--green)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
            }}
          >
            ./contact
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <p
        className="term-reveal opacity-0 absolute bottom-8 left-6 text-xs tracking-widest md:left-16"
        style={{ color: "var(--text-dim)" }}
      >
        scroll ↓
      </p>
    </section>
  );
}
