export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section heading */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Professional experience across data engineering, backend systems,
          and cloud-native applications.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-16">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-translate-x-1/2" />

        {/* Aviation Academy */}
        <div className="relative md:flex md:justify-end">
          {/* Timeline dot */}
          <span className="absolute left-2 top-8 h-4 w-4 rounded-full bg-indigo-600 md:left-1/2 md:-translate-x-1/2" />

          <div className="group relative ml-10 max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 md:ml-0 md:w-1/2 md:pl-12">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">
                Backend Developer · Aviation Academy
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Aug 2025 – Oct 2025 · Melbourne
              </span>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                • Developed backend services for a full-stack LMS used by flight
                schools to manage students, courses, and analytics.
              </li>
              <li>
                • Built REST APIs with Node.js and Express backed by MongoDB,
                supporting nested course structures.
              </li>
              <li>
                • Implemented file-processing pipelines for PPT, PDF, and MP4
                uploads with automated conversion and previews.
              </li>
              <li>
                • Integrated MinIO, LibreOffice, and Poppler for document
                transformation workflows.
              </li>
              <li>
                • Served as Scrum Master, leading sprint planning, standups,
                reviews, and delivery.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "MinIO",
                "REST APIs",
                "Scrum",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LTIMindtree */}
        <div className="relative md:flex md:justify-start">
          {/* Timeline dot */}
          <span className="absolute left-2 top-8 h-4 w-4 rounded-full bg-indigo-600 md:left-1/2 md:-translate-x-1/2" />

          <div className="group relative ml-10 max-w-xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 md:ml-0 md:w-1/2 md:pr-12">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">
                Senior Data Engineer · LTIMindtree
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Aug 2022 – Sep 2023 · India
              </span>
            </div>

            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                • Designed and maintained enterprise ETL/ELT pipelines
                integrating Salesforce and revenue data.
              </li>
              <li>
                • Processed 2M+ records/day using Databricks, SparkSQL, and
                PySpark with significant runtime optimisation.
              </li>
              <li>
                • Optimised complex SQL transformations for analytics and
                reporting workloads.
              </li>
              <li>
                • Built metadata-driven workflows ensuring governance and
                version control.
              </li>
              <li>
                • Partnered with analysts and stakeholders to deliver
                production-grade data models.
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Databricks",
                "SparkSQL",
                "PySpark",
                "SQL",
                "Delta Lake",
                "ETL/ELT",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
