import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="bg-white px-4 pt-24 pb-8 md:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[520px] max-w-[1400px] items-center justify-center overflow-hidden rounded-[50px] md:min-h-[600px] lg:min-h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
          alt="Tasse de café fumante sur un bureau"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-24">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-brown-300">
            Café de bureau · OCS · Abidjan
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Une bonne tasse de café
            <span className="mt-2 block text-brown-400">fait toute la différence</span>
          </h1>
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

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
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
      </div>
    </section>
  );
}
