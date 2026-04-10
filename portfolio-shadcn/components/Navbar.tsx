"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between px-8 h-14 border-b transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <Link href="/" className="text-sm font-semibold tracking-tight">
        A<span className="text-muted-foreground">.</span>Rawat
      </Link>

      <ul className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <li key={l}>
            <Link
              href={`#${l.toLowerCase()}`}
              className="text-xs font-medium text-muted-foreground px-3 py-1.5 rounded-md hover:text-foreground hover:bg-secondary transition-colors"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
}
