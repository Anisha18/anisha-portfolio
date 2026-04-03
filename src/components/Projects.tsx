import { useEffect, useRef } from "react";

const TerminalPreview = ({ id }: { id: string }) => {
  const snippets: Record<string, { lines: { text: string; green?: boolean }[] }> = {
    "01": {
      lines: [
        { text: "$ flask run --host=0.0.0.0" },
        { text: " * Running on http://0.0.0.0:5000", green: true },
        { text: "$ docker push 123.dkr.ecr.ap-southeast-2..." },
        { text: " ✓ Deployed · Lambda cold start 120ms", green: true },
      ],
    },
    "02": {
      lines: [
        { text: "$ npm run dev" },
        { text: " ✓ Express listening on :3001", green: true },
        { text: "POST /api/courses/upload  200  48ms" },
        { text: " ✓ PDF converted · MinIO preview ready", green: true },
      ],
    },
    "03": {
      lines: [
        { text: "%sql SELECT * FROM silver.revenue LIMIT 10" },
        { text: " 2,048,391 rows · 1.2s · Δ optimised", green: true },
        { text: 'spark.read.format("delta").load(path)' },
        { text: " ✓ Pipeline complete · 20 sources merged", green: true },
      ],
    },
    "04": {
      lines: [
        { text: "EXPLAIN ANALYZE SELECT fare FROM trips;" },
        { text: " Index Scan · cost=0.00..0.42 · 50ms", green: true },
        { text: "GRANT SELECT ON trips TO analyst_role;" },
        { text: " ✓ Row-level security applied", green: true },
      ],
    },
  };

  const s = snippets[id];
  if (!s) return null;

  return (
    <div
      className="w-full overflow-hidden rounded-sm font-mono text-xs"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Fake title bar */}
      <div
        className="flex items-center gap-1.5 px-3 py-2"
        style={{ backgroundColor: "var(--bg-border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#28c840" }} />
      </div>
      {/* Code lines */}
      <div className="space-y-1 px-3 py-3">
        {s.lines.map((line, i) => (
          <p
            key={i}
            className="truncate text-[11px] leading-relaxed"
            style={{ color: line.green ? "var(--green)" : "var(--text-dim)" }}
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    id: "01",
    title: "VibeMusic",
    subtitle: "Cloud-Based Music Subscription Platform",
    tech: ["Flask", "AWS", "Docker", "DynamoDB", "Lambda", "S3"],
    github: "https://github.com/Anisha18/CloudApp",
    featured: false,
  },
  {
    id: "02",
    title: "Aviation Academy LMS",
    subtitle: "Flight School Learning Management System",
    tech: ["Node.js", "Express.js", "React", "MongoDB", "MinIO", "Jest"],
    github: "https://github.com/Anisha18/Flight-School-Dashboard",
    featured: true,
  },
  {
    id: "03",
    title: "Enterprise ETL Pipelines",
    subtitle: "Databricks · Analytics & Reporting",
    tech: ["Databricks", "SparkSQL", "PySpark", "Delta Lake"],
    featured: false,
  },
  {
    id: "04",
    title: "Myki Ticketing System",
    subtitle: "Database Design & Security",
    tech: ["SQL", "Database Design", "Security", "Data Modelling"],
    featured: false,
  },
];

export default function Projects() {
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
      { threshold: 0.08 }
    );
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.1}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="mx-auto max-w-5xl px-6 py-24 md:px-12">
      <div className="term-reveal opacity-0 mb-12 flex items-center gap-4">
        <span className="text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
          // 02
        </span>
        <h2 className="text-2xl font-bold tracking-widest" style={{ color: "var(--green)" }}>
          PROJECTS
        </h2>
        <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.id}
            className="term-reveal group opacity-0 overflow-hidden rounded transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: p.featured ? "1px solid var(--green-dim)" : "1px solid var(--bg-border)",
              boxShadow: p.featured ? "0 0 28px var(--green-glow)" : "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--green-dim)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 22px var(--green-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = p.featured
                ? "var(--green-dim)"
                : "var(--bg-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = p.featured
                ? "0 0 28px var(--green-glow)"
                : "none";
            }}
          >
            {/* Terminal preview */}
            <div style={{ borderBottom: "1px solid var(--bg-border)" }} className="p-3">
              <TerminalPreview id={p.id} />
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs" style={{ color: "var(--text-dim)" }}>
                  [{p.id}]
                </span>
                {p.featured && (
                  <span className="text-xs tracking-widest" style={{ color: "var(--green)" }}>
                    ★ featured
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="mt-1 text-xs" style={{ color: "var(--text-dim)" }}>
                {p.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
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

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs tracking-widest transition-colors duration-200"
                  style={{ color: "var(--text-dim)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--green)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")
                  }
                >
                  → github
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
