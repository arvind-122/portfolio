import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-8 pt-28 pb-20">
      <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5 text-xs text-muted-foreground mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot flex-shrink-0" />
        Available for opportunities
      </div>

      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-5">
        Arvind Singh
        <br />
        <span className="text-muted-foreground">Rawat</span>
      </h1>

      <p className="text-base text-muted-foreground max-w-lg mb-9 leading-relaxed">
        Building scalable web experiences with Next.js &amp; Firebase.
        2+ years crafting responsive, user-centric applications that
        deliver real business impact.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
