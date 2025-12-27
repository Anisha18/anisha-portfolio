export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Professional experience across data engineering, backend systems,
          and cloud-native applications.
        </p>
      </div>

      <div className="space-y-12">
        {/* Aviation Academy */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold">
              Backend Developer · Aviation Academy
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Aug 2025 – Oct 2025 · Melbourne, Australia
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>
              • Developed backend services for a full-stack LMS used by flight
              schools to manage students, courses, and progress analytics.
            </li>
            <li>
              • Built REST APIs using Node.js and Express with a MongoDB data
              model supporting nested course structures and dynamic content.
            </li>
            <li>
              • Implemented a file-processing pipeline handling PPT, PDF, and
              MP4 uploads with automated conversion and preview generation.
            </li>
            <li>
              • Integrated MinIO, LibreOffice, and Poppler for document storage,
              transformation, and slide extraction workflows.
            </li>
            <li>
              • Served as Scrum Master, leading sprint planning, daily standups,
              code reviews, and cross-team coordination.
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

        {/* LTIMindtree */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
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
              • Designed and maintained large-scale ETL/ELT pipelines
              integrating Salesforce and revenue data into enterprise data
              layers.
            </li>
            <li>
              • Processed 2M+ records per day using Databricks, SparkSQL, and
              PySpark with significant runtime optimisation.
            </li>
            <li>
              • Developed and optimised complex SQL queries, stored procedures,
              and transformations for analytics and reporting.
            </li>
            <li>
              • Built metadata-driven workflows ensuring data governance,
              version control, and reliability.
            </li>
            <li>
              • Collaborated with analysts and stakeholders to refine
              requirements and deliver well-documented data models.
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
    </section>
  );
}
