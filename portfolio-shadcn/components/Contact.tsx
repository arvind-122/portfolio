import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-20">
      <div className="bg-card border border-border rounded-2xl p-12 text-center flex flex-col items-center gap-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Let&apos;s build something
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Open to new opportunities, collaborations, and interesting projects.
        </p>
        <p className="text-sm font-medium">rawatarvind718@gmail.com</p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Button asChild size="lg">
            <a href="mailto:rawatarvind718@gmail.com">Send Email</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://linkedin.com/in/arvind-singh-rawat-4760b1172"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
