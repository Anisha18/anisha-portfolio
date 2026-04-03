import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Backend Developer",
    company: "Aviation Academy",
    period: "Aug 2025 – Oct 2025",
    location: "Melbourne, AU",
    tech: ["Node.js", "Express.js", "MongoDB", "MinIO", "REST APIs"],
  },
  {
    role: "Senior Data Engineer",
    company: "LTIMindtree",
    period: "Aug 2022 – Sep 2023",
    location: "India",
    tech: ["Databricks", "SparkSQL", "PySpark", "Delta Lake"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Animate the vertical timeline line on scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = ref.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const rect = section.getBoundingClientRect();
      const totalH = section.offsetHeight;
      const scrolled = Math.max(0, -rect.top + window.innerHeight * 0.3);
      const pct = Math.min(1, scrolled / totalH);
      setLineHeight(pct * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade in cards
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
      el.style.animationDelay = `${i * 0.15}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="mx-auto max-w-5xl px-6 py-24 md:px-12">
      {/* Section header */}
      <div className="term-reveal opacity-0 mb-12 flex items-center gap-4">
        <span className="text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
          // 03
        </span>
        <h2 className="text-2xl font-bold tracking-widest" style={{ color: "var(--green)" }}>
          EXPERIENCE
        </h2>
        <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
      </div>

      {/* Timeline layout */}
      <div className="relative pl-8 md:pl-12">

        {/* Animated vertical line track */}
        <div
          className="absolute left-0 top-0 w-px"
          style={{
            height: "100%",
            backgroundColor: "var(--bg-border)",
          }}
        />
        {/* Filled portion — grows on scroll */}
        <div
          ref={lineRef}
          className="absolute left-0 top-0 w-px transition-none"
          style={{
            height: `${lineHeight}%`,
            background: `linear-gradient(to bottom, var(--green), var(--green-dim))`,
            boxShadow: "0 0 8px var(--green-glow)",
          }}
        />

        {/* Entries */}
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="term-reveal relative opacity-0">
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-5 flex h-4 w-4 items-center justify-center rounded-full md:-left-12"
                style={{
                  backgroundColor: "var(--bg)",
                  border: "2px solid var(--green)",
                  boxShadow: "0 0 10px var(--green-glow)",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--green)" }}
                />
              </div>

              {/* Card */}
              <div
                className="rounded p-6 transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--bg-border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--green-dim)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px var(--green-glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Period badge */}
                <p className="mb-3 text-xs tracking-widest" style={{ color: "var(--green)" }}>
                  ▶ {exp.period}
                </p>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3
                      className="text-base font-bold tracking-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="mt-0.5 text-sm font-medium"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded px-2 py-0.5 text-xs"
                      style={{
                        backgroundColor: "var(--bg)",
                        border: "1px solid var(--bg-border)",
                        color: "var(--text-dim)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* End cap */}
          <div className="relative flex items-center gap-3 pl-0">
            <div
              className="absolute -left-8 flex h-3 w-3 items-center justify-center rounded-full md:-left-12"
              style={{
                backgroundColor: "var(--bg-border)",
                border: "1px solid var(--bg-border)",
                transform: "translateX(-50%)",
              }}
            />
            <p className="text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
              — more to come
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
