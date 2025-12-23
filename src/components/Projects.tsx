const projects = [
  {
    title: "VibeMusic – Cloud-Based Music Subscription Platform",
    description:
      "Designed and deployed a full-stack music subscription web application on AWS, supporting user authentication, subscriptions, and secure media access via RESTful APIs.",
    highlights: [
      "Deployed on AWS EC2 with S3, DynamoDB, Lambda, and API Gateway",
      "Implemented secure user authentication and subscription workflows for ~2,000 concurrent users",
      "Built scalable REST APIs serving 50,000+ requests/month with <200ms average response time",
    ],
    tech: ["AWS", "Node.js", "DynamoDB", "Lambda", "API Gateway", "S3"],
    github: "https://github.com/Anisha18",
    live: "#",
  },
  {
    title: "Aviation Academy LMS – Backend & File Processing System",
    featured: true,
    description:
        "Developed backend services for a Learning Management System used by flight schools to manage students, courses, and progress analytics.",
    highlights: [
        "Designed REST APIs supporting student onboarding, course management, and analytics",
        "Built a file-processing pipeline handling PPT, PDF, and MP4 uploads with automated conversion",
        "Enabled document previews using MinIO, LibreOffice, and Poppler",
        "Served as Scrum Master overseeing sprint planning, reviews, and delivery",
    ],
    tech: ["Node.js", "Express", "MongoDB", "MinIO", "REST APIs"],
    github: "https://github.com/Anisha18",
    live: "#",
  },
  {
    title: "Enterprise ETL & Analytics Pipelines – Databricks",
    description:
      "Designed and optimised large-scale ETL/ELT pipelines integrating Salesforce and revenue data into enterprise data layers for analytics and reporting.",
    highlights: [
      "Processed 2M+ records/day using Databricks and SparkSQL with 30% reduced runtime",
      "Built metadata-driven pipelines for 20+ data sources ensuring accuracy and governance",
      "Delivered optimized reporting datasets consumed by 50+ analysts and dashboards",
    ],
    tech: ["Databricks", "SparkSQL", "PySpark", "SQL", "Delta Lake"],
    github: "https://github.com/Anisha18",
    live: "#",
  },
  {
    title: "Myki Ticketing System – Database Design & Security",
    description:
      "Designed a relational database system for Melbourne’s public transport ticketing, supporting payments, trips, and fare management at scale.",
    highlights: [
      "Created ER diagrams and relational schemas supporting 10M+ trip transactions/year",
      "Implemented role-based access control, row-level security, and audit logging",
      "Optimized queries reducing average fare transaction response from 300ms → 50ms",
    ],
    tech: ["SQL", "Database Design", "Security", "Data Modelling"],
    github: "https://github.com/Anisha18",
    live: "#",
  },
];

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Selected Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A snapshot of the work I’ve done across software engineering,
          data, and cloud technologies.
        </p>
      </div>

      {/* Projects grid */}
      {/* Featured project */}
        {featuredProject && (
        <div className="mb-20">
            <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-transparent p-10 shadow-lg dark:border-indigo-400/30">
            
            <span className="mb-4 inline-block rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                Featured Project
            </span>

            <h3 className="text-3xl font-bold">
                {featuredProject.title}
            </h3>

            <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                {featuredProject.description}
            </p>

            {/* Highlights */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-600 dark:text-gray-400">
                {featuredProject.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>{point}</span>
                </li>
                ))}
            </ul>

            {/* Tech */}
            <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech, i) => (
                <span
                    key={i}
                    className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
                >
                    {tech}
                </span>
                ))}
            </div>

            {/* Links */}
            <div className="mt-8 flex gap-6">
                <a
                href={featuredProject.github}
                target="_blank"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                View Code →
                </a>
                <a
                href={featuredProject.live}
                target="_blank"
                className="font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300"
                >
                Live Demo →
                </a>
            </div>
            </div>
        </div>
        )}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {project.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
              >
                GitHub →
              </a>
              <a
                href={project.live}
                target="_blank"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Live Demo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
