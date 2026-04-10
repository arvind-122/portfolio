import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    uni: "Hemwati Nandan Bahuguna Garhwal University",
    years: "2019 – 2022",
  },
  {
    degree: "Bachelor of Science (BSc)",
    uni: "Hemwati Nandan Bahuguna Garhwal University",
    years: "2015 – 2018",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-4xl mx-auto px-8 py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Education</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">Academic background</h2>
      <div className="flex flex-col gap-4">
        {education.map((e) => (
          <Card key={e.degree}>
            <CardContent className="flex items-start justify-between p-6 gap-4">
              <div>
                <p className="text-sm font-semibold">{e.degree}</p>
                <p className="text-xs text-muted-foreground mt-1">{e.uni}</p>
              </div>
              <p className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">{e.years}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
