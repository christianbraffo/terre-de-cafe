import Image from "next/image";
import CoffeePattern from "@/components/CoffeePattern";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <CoffeePattern />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll direction="left">
          <div className="relative">
            <Image
              src="/man-with-coffee.png"
              alt="Homme présentant une tasse de café TERREDECAFE"
              width={960}
              height={1280}
              className="h-auto w-full rounded-2xl"
              priority
            />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-brown-600/10" />
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={150}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
              Qui sommes-nous
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-black md:text-5xl">
              L&apos;excellence du café
              <span className="text-brown-600"> au bureau</span>
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-black/70">
              <p>
                TERREDECAFE est un fournisseur de services de café de bureau (OCS)
                basé à <strong className="text-black">Abidjan, en Côte d&apos;Ivoire</strong>.
                Grâce à son équipe d&apos;experts et de passionnés, vous bénéficierez
                d&apos;un service de grande qualité pour le bonheur et la satisfaction
                de vos clients et employés.
              </p>
              <p>
                Chez TERREDECAFE, nous pensons qu&apos;une bonne tasse de café peut
                faire la différence dans la journée d&apos;un employé. Pour cette
                raison, nous sélectionnons pour nos partenaires le meilleur matériel
                pouvant s&apos;intégrer agréablement dans l&apos;environnement de la
                société et le meilleur café issu du plus grand terroir.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-brown-100 pt-10">
              {[
                { value: "100%", label: "Qualité premium" },
                { value: "OCS", label: "Service complet" },
                { value: "CI", label: "Made in Abidjan" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-brown-600">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-black/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
