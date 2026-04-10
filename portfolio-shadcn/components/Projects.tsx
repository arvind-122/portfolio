import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    num: "01",
    name: "E-Commerce Platform",
    desc: "Full-featured shopping experience with cart management, Stripe payment integration, and role-based access control (admin vs. customer). Achieved 90+ Lighthouse performance score via SSR and image optimization.",
    tags: ["Next.js", "Firebase", "Stripe", "Firestore Auth"],
  },
  {
    num: "02",
    name: "Analytics Dashboard",
    desc: "Real-time business metrics dashboard built with live Firestore listeners and integrated Grafana monitoring. Reduced issue detection time by 40% through proactive alerting and visualization.",
    tags: ["React", "Firebase Firestore", "Grafana"],
  },
  {
    num: "03",
    name: "Task Manager App",
    desc: "Collaborative task management tool with drag-and-drop kanban board, RESTful API backend, real-time status updates, and a notification system for team coordination.",
    tags: ["Next.js", "Express.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Projects</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Selected work</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <Card key={p.num} className="flex flex-col hover:border-zinc-700 transition-colors group">
            <CardHeader className="pb-3">
              <p className="text-xs font-semibold text-muted-foreground/60 tracking-widest mb-1">{p.num}</p>
              <CardTitle className="text-base">{p.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <CardDescription className="text-xs leading-relaxed flex-1">{p.desc}</CardDescription>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px] px-2 py-0.5">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
