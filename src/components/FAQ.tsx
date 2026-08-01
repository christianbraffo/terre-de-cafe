"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { faqs } from "@/lib/faqs";


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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brown-600 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-brown-100 px-6 pb-5 pt-4">
                      <p className="leading-relaxed text-black/70">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
