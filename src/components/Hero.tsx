import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(".fade-hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
          } else {
            entry.target.classList.remove("animate-slideUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight fade-hero opacity-0">
        Hi, I’m <span className="text-indigo-500">Anisha</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 fade-hero opacity-0">
        Software Engineer with experience in building scalable applications,
        data-driven systems, and modern web interfaces using React, TypeScript,
        and cloud technologies.
      </p>

      <div className="mt-8 flex gap-4 fade-hero opacity-0">
        <a
          href="#projects"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-xl border px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:bg-gray-800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
