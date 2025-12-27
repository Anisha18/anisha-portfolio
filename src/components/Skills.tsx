export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      title: "Data Engineering & Analytics",
      skills: [
        "Databricks",
        "PySpark",
        "SparkSQL",
        "Delta Lake",
        "ETL/ELT Pipelines",
        "Data Modelling",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD Pipelines", "GitHub Actions"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Power BI",
        "Postman",
        "Linux",
        "VS Code",
      ],
    },
    {
      title: "Methodologies",
      skills: ["Agile Scrum", "SDLC", "Sprint Planning", "Code Reviews"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Section heading */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Skills
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Technical skills across software engineering, data platforms,
          and cloud-native development.
        </p>
      </div>

      {/* Skill groups */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="mb-4 text-lg font-semibold">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
