"use client";

import { useState } from "react";
import Image from "next/image";
import TypeWriter from "@/components/TypeWriter";

export default function Hero() {
  const [showRest, setShowRest] = useState(false);

  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
        alt="Café de bureau TERREDECAFE — tasse de café fumante pour entreprises à Abidjan"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-28 text-center lg:px-8">
        <p className="mb-6 animate-hero-fade text-sm font-semibold uppercase tracking-[0.3em] text-brown-300">
          Café de bureau · OCS · Abidjan
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
          <span className="sr-only">TERREDECAFE — </span>
          <span className="animate-hero-fade block" style={{ animationDelay: "200ms" }}>
            Une bonne tasse de café
          </span>
          <span className="mt-2 block min-h-[1.15em] text-brown-400">
            <TypeWriter
              text="fait toute la différence"
              delay={700}
              speed={45}
              onComplete={() => setShowRest(true)}
            />
          </span>
        </h1>
        <div
          className={`transition-all duration-700 ${
            showRest
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            TERREDECAFE accompagne les entreprises ivoiriennes avec un service de café
            de bureau d&apos;exception — matériel premium, café issu du plus grand
            terroir et une équipe passionnée à vos côtés.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="w-full rounded-full bg-brown-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brown-500 hover:shadow-xl hover:shadow-brown-600/40 sm:w-auto"
            >
              Découvrir nos solutions
            </a>
            <a
              href="#a-propos"
              className="w-full rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce motion-reduce:animate-none">
        <a href="#a-propos" aria-label="Défiler vers le bas">
          <svg
            className="h-6 w-6 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
