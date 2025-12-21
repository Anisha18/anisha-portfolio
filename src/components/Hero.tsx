export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* Background gradient blur */}
      <div className="pointer-events-none absolute -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-3xl dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute -bottom-40 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/30 blur-3xl dark:bg-purple-600/20" />

      {/* Heading */}
      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight md:text-7xl">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Anisha
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
        Software Engineer focused on building scalable applications,
        data-driven systems, and modern web interfaces using{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          React, TypeScript, and Cloud technologies
        </span>.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="group relative inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl"
        >
          View Projects
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
