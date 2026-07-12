import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const moments = [
  {
    label: "Au bureau",
    image:
      "https://images.pexels.com/photos/5921651/pexels-photo-5921651.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Collègues prenant un café au bureau",
  },
  {
    label: "En famille",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&q=80",
    alt: "Moment café en famille",
  },
  {
    label: "Entre amis",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    alt: "Discussion autour d'un café",
  },
  {
    label: "Affaires",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80",
    alt: "Rendez-vous d'affaires",
  },
];

export default function Passion() {
  return (
    <section id="passion" className="bg-brown-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
              Notre passion
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-black md:text-5xl">
              Partageons ensemble cette passion
              <span className="text-brown-600"> Café & Thé</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-black/70">
              Chaque heure, chaque jour ou chaque soir, nous sommes des milliers
              de personnes à partager un Instant Café ou Thé. En famille, en
              rendez-vous d&apos;affaire, au bureau, entre amis pour discuter de
              l&apos;actualité, ou encore aux côtés de l&apos;amour de votre vie,
              le café et le thé occupent des places de choix dans nos vies.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-black/70">
              C&apos;est cette conviction qui guide chacune de nos interventions
              chez nos partenaires entreprises à Abidjan et en Côte d&apos;Ivoire.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Café", "Thé", "OCS", "Bien-être"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brown-300 bg-white px-5 py-2 text-sm font-medium text-brown-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {moments.map((moment, i) => (
              <AnimateOnScroll key={moment.label} direction="up" delay={i * 100}>
              <div
                className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={moment.image}
                    alt={moment.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <p className="absolute bottom-4 left-4 font-serif text-lg font-semibold text-white">
                    {moment.label}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
