import { useEffect, useRef } from "react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          } else {
            // Remove animation when it leaves viewport to replay next time
            entry.target.classList.remove("animate-fadeUp");
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
      id="contact"
      ref={containerRef}
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl fade-up opacity-0">
          Let’s Connect
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 fade-up opacity-0">
          I’m open to graduate and junior software engineering opportunities,
          as well as internships and project collaborations.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href="mailto:anishadsouza2000@gmail.com?subject=Portfolio Inquiry"
          className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm fade-up opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <h3 className="text-xl font-semibold">Email Me</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            anishadsouza2000@gmail.com
          </p>
          <span className="mt-5 inline-flex items-center gap-1 font-medium text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
            Send an email →
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/anishadsouza"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm fade-up opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Connect with me professionally
          </p>
          <span className="mt-5 inline-flex items-center gap-1 font-medium text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
            View profile →
          </span>
        </a>

        <a
          href="/AnishaDsouza.pdf"
          download
          className="group relative rounded-2xl border border-indigo-500/30 bg-indigo-50 p-8 text-center shadow-sm fade-up opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-indigo-400/30 dark:bg-indigo-900/20"
        >
          <h3 className="text-xl font-semibold">Resume</h3>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Download my latest CV (PDF)
          </p>
          <span className="mt-5 inline-flex items-center gap-1 font-medium text-indigo-600 transition-transform group-hover:translate-x-1 dark:text-indigo-400">
            Download →
          </span>
        </a>
      </div>
    </section>
  );
}
