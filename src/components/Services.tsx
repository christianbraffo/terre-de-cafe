import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    title: "Matériel premium",
    description:
      "Des machines à café et distributeurs sélectionnés pour s'intégrer harmonieusement dans votre espace de travail.",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Machine à café professionnelle",
  },
  {
    title: "Café d'exception",
    description:
      "Le meilleur café issu du plus grand terroir, torréfié et conditionné pour préserver toutes ses arômes.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    alt: "Grains de café torréfiés",
  },
  {
    title: "Service & maintenance",
    description:
      "Une équipe d'experts passionnés assure l'installation, l'approvisionnement et la maintenance de vos équipements.",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&q=80",
    alt: "Barista préparant un café",
  },
  {
    title: "Thé & boissons chaudes",
    description:
      "Une sélection raffinée de thés et infusions pour satisfaire tous les goûts de vos collaborateurs.",
    image:
      "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Tasse de thé",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brown-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-400">
            Nos services
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Des solutions complètes pour votre entreprise
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Chez TERREDECAFE, nous comprenons vos besoins et connaissons
            l&apos;importance d&apos;avoir un café ou un thé de qualité, infusé
            dans des machines de qualité.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.title} direction="up" delay={index * 100}>
            <article
              className="group overflow-hidden rounded-2xl bg-black/40 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {service.description}
                </p>
              </div>
            </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
