import AnimateOnScroll from "@/components/AnimateOnScroll";

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
  return (
    <section id="partenaires" className="border-y border-brown-100 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
          Ils nous font confiance
        </p>

        <div className="mt-10 flex items-center gap-12 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-center lg:overflow-visible">
          {partners.map((partner, index) => (
            <AnimateOnScroll key={partner} direction="none" delay={index * 60}>
              <div className="flex shrink-0 items-center justify-center px-4">
                <span className="whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-black/30 transition-colors hover:text-brown-600 md:text-xl">
                  {partner}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
