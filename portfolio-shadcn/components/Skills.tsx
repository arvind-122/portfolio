import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { category: "Frontend", items: "Next.js · React · JavaScript ES6+ · HTML5 · CSS3" },
  { category: "Backend & Database", items: "Firebase · Firestore · Auth · Cloud Functions · Express.js · MongoDB" },
  { category: "Tools & Platforms", items: "Git · GitHub · Grafana · VS Code" },
  { category: "Practices", items: "Agile · Responsive Design · Code Review · Performance Optimization" },
  { category: "Soft Skills", items: "Cross-functional Collaboration · Documentation · Problem Solving" },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Technical Skills</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">What I work with</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((s) => (
          <Card key={s.category} className="hover:border-border/80 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{s.items}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
