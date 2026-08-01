"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#parcours", label: "Parcours" },
  { href: "#passion", label: "Passion" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setScrolled(true);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8 lg:py-4">
        <a href="#accueil" className="group flex items-center gap-3">
          <Image
            src={solid ? "/logo.png" : "/logo-white.png"}
            alt="TERREDECAFE — Café de bureau à Abidjan"
            width={64}
            height={64}
            className={`h-14 w-14 rounded-full object-cover transition-all md:h-16 md:w-16 ${
              solid
                ? "ring-0"
                : "ring-2 ring-white/40 bg-white/10"
            } group-hover:opacity-90`}
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-black/70 hover:text-brown-600"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-brown-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brown-500 hover:shadow-lg hover:shadow-brown-600/30"
          >
            Demander un devis
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 transition-transform ${
              solid ? "bg-black" : "bg-white"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity ${
              solid ? "bg-black" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform ${
              solid ? "bg-black" : "bg-white"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-black/80 hover:text-brown-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brown-600 px-5 py-3 text-center font-semibold text-white"
            >
              Demander un devis
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
