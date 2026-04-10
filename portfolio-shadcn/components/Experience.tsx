const experiences = [
  {
    period: ["Oct 2024", "Present"],
    role: "Full Stack Developer",
    company: "Yashida Tech",
    location: "Mohali, India",
    current: true,
    bullets: [
      "Architect and maintain full stack web applications using Next.js and Firebase, improving page performance and reducing load times.",
      "Design and implement scalable front-end components with reusable patterns, increasing developer velocity across the team.",
      "Optimize application performance through code splitting, lazy loading, and Firebase query tuning.",
      "Implement fully responsive UI designs ensuring consistent experience across all devices.",
      "Conduct peer code reviews and enforce coding standards to maintain high code quality.",
    ],
  },
  {
    period: ["Apr 2023", "Mar 2025"],
    role: "Frontend Developer",
    company: "Yashida Tech",
    location: "Mohali, India",
    current: false,
    bullets: [
      "Built responsive, accessible web interfaces using React, Next.js, JavaScript, HTML5, and CSS3.",
      "Integrated front-end components with Firebase backend (Firestore, Authentication) for real-time data handling.",
      "Contributed to the development of scalable web applications serving a growing user base.",
      "Monitored application health and performance using Grafana dashboards, enabling proactive issue resolution.",
      "Maintained comprehensive documentation and participated in regular code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Experience</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Where I&apos;ve worked</h2>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, i) => (
          <div key={exp.role + exp.period[0]} className="grid grid-cols-[100px_1fr] gap-x-6">
            {/* Time column */}
            <div className="flex flex-col items-end pt-0.5 pb-10 text-right">
              <span className="text-xs text-muted-foreground">{exp.period[0]}</span>
              <span className="text-xs text-muted-foreground">{exp.period[1]}</span>
            </div>

            {/* Timeline + Body */}
            <div className="flex gap-4 pb-10">
              {/* Dot + Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 border-2 border-background ${
                    exp.current ? "bg-green-500" : "bg-muted-foreground"
                  }`}
                />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1" />
                )}
              </div>

              {/* Content */}
              <div className={i < experiences.length - 1 ? "pb-2" : ""}>
                <p className="text-base font-semibold">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {exp.company} — {exp.location}
                </p>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-muted-foreground pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground/50 leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
