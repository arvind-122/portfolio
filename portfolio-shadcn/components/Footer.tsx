import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className="text-center py-8 px-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arvind Singh Rawat · Built with Next.js &amp; shadcn/ui
      </footer>
    </>
  );
}
