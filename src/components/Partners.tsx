const partners = [
  "Orange Côte d'Ivoire",
  "Ecobank",
  "SODECI",
  "CFAO Motors",
  "BICI",
  "NSIA Banque",
  "Air Côte d'Ivoire",
  "SITARAIL",
];

export default function Partners() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section id="partenaires" className="border-y border-brown-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex shrink-0 items-center justify-center px-8 md:px-12"
            >
              <span className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-black/30 transition-colors hover:text-brown-600 md:text-xl">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
