export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Let’s Connect
        </h2>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          I’m open to graduate and junior software engineering opportunities,
          as well as internships and project collaborations.
        </p>
      </div>

      {/* CTA cards */}
      <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
        {/* Email */}
        <a
          href="mailto:anishadsouza2000@gmail.com?subject=Portfolio Inquiry"
          className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <h3 className="text-xl font-semibold">
            Email Me
          </h3>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            anishadsouza2000@gmail.com
          </p>

          <span className="mt-4 inline-block font-medium text-indigo-600 dark:text-indigo-400">
            Send an email →
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/anishadsouza"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <h3 className="text-xl font-semibold">
            LinkedIn
          </h3>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Connect with me professionally
          </p>

          <span className="mt-4 inline-block font-medium text-indigo-600 dark:text-indigo-400">
            View profile →
          </span>
        </a>

        {/* Resume */}
        <a
            href="/Anisha_Dsouza_Resume.pdf"
            download
            className="group relative rounded-2xl border border-indigo-500/30 bg-indigo-50 p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-indigo-400/30 dark:bg-indigo-900/20"
        >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <h3 className="text-xl font-semibold">Resume</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Download my latest CV (PDF)
            </p>
            <span className="mt-4 inline-block font-medium text-indigo-600 dark:text-indigo-400">
            Download →
            </span>
        </a>
      </div>
    </section>
  );
}
