import { useEffect, useRef } from "react";

const skillGroups = [
  { label: "languages", skills: ["JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "frontend", skills: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { label: "backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { label: "data", skills: ["Databricks", "PySpark", "SparkSQL", "Delta Lake", "ETL/ELT"] },
  { label: "databases", skills: ["MongoDB", "PostgreSQL", "MySQL"] },
  { label: "cloud & devops", skills: ["AWS", "Docker", "CI/CD", "GitHub Actions"] },
  { label: "tools", skills: ["Git", "Power BI", "Postman", "Linux", "VS Code"] },
  { label: "methods", skills: ["Agile Scrum", "SDLC", "Code Reviews"] },
];

export default function Skills() {
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
      el.style.animationDelay = `${i * 0.08}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="mx-auto max-w-5xl px-6 py-24 md:px-12">
      {/* Section header */}
      <div className="term-reveal opacity-0 mb-12 flex items-center gap-4">
        <span className="text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
          // 04
        </span>
        <h2 className="text-2xl font-bold tracking-widest" style={{ color: "var(--green)" }}>
          SKILLS
        </h2>
        <div className="h-px flex-1" style={{ backgroundColor: "var(--bg-border)" }} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="term-reveal opacity-0">
            <p
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "var(--text-dim)" }}
            >
              <span style={{ color: "var(--green)" }}>$</span> {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded px-2.5 py-1 text-xs tracking-wide transition-all duration-150 cursor-default"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--bg-border)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--green-dim)";
                    (e.currentTarget as HTMLElement).style.color = "var(--green)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
