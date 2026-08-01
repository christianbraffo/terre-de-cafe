"use client";

import { FormEvent, useState } from "react";
import CoffeePattern from "@/components/CoffeePattern";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Impossible d'envoyer la demande. Réessayez.");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 lg:py-32">
      <CoffeePattern variant="dark" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brown-400">
          Contactez-nous
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
          Prêt à transformer l&apos;expérience café de votre entreprise ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Notre équipe d&apos;experts est à votre disposition pour étudier vos
          besoins et vous proposer une solution sur mesure, adaptée à votre
          environnement de travail.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl space-y-4 text-left"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Nom complet"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email professionnel"
              className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
            />
          </div>
          <input
            type="text"
            name="company"
            required
            placeholder="Entreprise"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
          />
          <textarea
            name="message"
            required
            placeholder="Décrivez vos besoins..."
            rows={4}
            className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-brown-500 focus:outline-none focus:ring-1 focus:ring-brown-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="animate-cta-pulse w-full rounded-full bg-brown-600 py-4 text-base font-semibold text-white transition-all hover:bg-brown-500 hover:shadow-xl hover:shadow-brown-600/30 disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:animate-none"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-400" role="status">
              Merci ! Votre demande a bien été envoyée. Nous vous recontactons
              rapidement.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400" role="alert">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
