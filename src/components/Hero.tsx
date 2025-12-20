export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6 transition-all duration-700">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight transform hover:scale-105 transition-transform duration-500">
        Hi, I’m <span className="text-indigo-500">Anisha</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 transition-colors duration-500">
        Software Engineer with experience in building scalable applications,
        data-driven systems, and modern web interfaces using React, TypeScript,
        and cloud technologies.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
