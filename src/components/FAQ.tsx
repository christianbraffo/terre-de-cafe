"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const faqs = [
  {
    question: "Qu'est-ce que le service OCS proposé par TERREDECAFE ?",
    answer:
      "L'OCS (Office Coffee Service) est un service complet de café de bureau : fourniture de machines professionnelles, approvisionnement en café et thé de qualité, installation et maintenance. Nous accompagnons les entreprises à Abidjan pour offrir à leurs équipes une expérience café premium au quotidien.",
  },
  {
    question: "Quels types de machines à café proposez-vous ?",
    answer:
      "Nous sélectionnons du matériel professionnel adapté à votre espace de travail : distributeurs automatiques, machines à grains, machines à capsules ou solutions combinées café et thé. Chaque équipement est choisi pour son design, sa fiabilité et la qualité de l'infusion.",
  },
  {
    question: "Intervenez-vous uniquement à Abidjan ?",
    answer:
      "TERREDECAFE est basé à Abidjan et intervient principalement dans la région d'Abidjan et ses environs. Pour les entreprises situées en dehors de cette zone, contactez-nous afin d'étudier ensemble la faisabilité de notre intervention.",
  },
  {
    question: "Comment se déroule l'installation chez nous ?",
    answer:
      "Après étude de vos besoins, notre équipe se déplace sur site pour installer le matériel, le configurer et former vos collaborateurs à son utilisation. Nous veillons à ce que l'équipement s'intègre harmonieusement dans votre environnement de travail.",
  },
  {
    question: "Assurez-vous la maintenance et le réapprovisionnement ?",
    answer:
      "Oui. Nous assurons un suivi régulier de vos machines, leur entretien technique ainsi que le réapprovisionnement en café, thé et consommables. Vous bénéficiez d'un service clé en main, sans souci de gestion au quotidien.",
  },
  {
    question: "Proposez-vous du thé en plus du café ?",
    answer:
      "Absolument. En plus de notre sélection de cafés issus du plus grand terroir, nous proposons une gamme de thés et infusions pour répondre à tous les goûts de vos collaborateurs et visiteurs.",
  },
  {
    question: "Comment obtenir un devis personnalisé ?",
    answer:
      "Remplissez le formulaire de contact en bas de page ou écrivez-nous à contact@terredecafe.ci. Notre équipe vous recontactera rapidement pour comprendre vos besoins et vous proposer une solution sur mesure.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-600">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-black md:text-5xl">
            Questions fréquentes
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-black/70">
            Tout ce que vous devez savoir sur nos services de café de bureau à
            Abidjan.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimateOnScroll key={faq.question} direction="up" delay={index * 80}>
              <div
                className="overflow-hidden rounded-2xl border border-brown-100 bg-brown-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brown-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-black">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brown-600 text-white transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14M5 12h14"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-brown-100 px-6 pb-5 pt-4">
                    <p className="leading-relaxed text-black/70">{faq.answer}</p>
                  </div>
                )}
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
