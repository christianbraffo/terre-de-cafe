import AnimateOnScroll from "@/components/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Diagnostic & devis",
    description:
      "Nous analysons vos besoins et vous proposons une solution sur mesure, sans engagement.",
  },
  {
    number: "02",
    title: "Installation",
    description:
      "Notre équipe installe et configure le matériel premium directement dans vos locaux.",
  },
  {
    number: "03",
    title: "Approvisionnement",
    description:
      "Café, thé et consommables livrés régulièrement pour ne jamais manquer d’une pause.",
  },
  {
    number: "04",
    title: "Maintenance & suivi",
    description:
      "Entretien technique et accompagnement continu pour une expérience café sans souci.",
  },
];

export default function Process() {
  return (
    <section id="parcours" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
            Comment ça marche
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-black md:text-5xl">
            Un parcours simple, un café d&apos;exception
          </h2>
          <p className="mt-6 text-lg text-black/70">
            De la première conversation à la pause café quotidienne, nous gérons
            chaque étape pour vous.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-brown-200 lg:block"
            aria-hidden
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} direction="up" delay={index * 120}>
                <li className="relative text-center lg:text-left">
                  <span className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-brown-200 bg-brown-50 font-serif text-2xl font-bold text-brown-600 lg:mx-0">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">
                    {step.description}
                  </p>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-brown-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brown-500 hover:shadow-xl hover:shadow-brown-600/30"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
