export default function Footer() {
  return (
    <footer className="bg-brown-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brown-600 text-lg font-bold text-white">
                T
              </span>
              <span className="font-serif text-2xl font-semibold text-white">
                TERREDECAFE
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Fournisseur de services de café de bureau (OCS) à Abidjan, Côte
              d&apos;Ivoire. Passion, qualité et service d&apos;excellence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brown-400">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#a-propos", label: "À propos" },
                { href: "#services", label: "Services" },
                { href: "#passion", label: "Passion" },
                { href: "#faq", label: "FAQ" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-brown-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brown-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Abidjan, Côte d&apos;Ivoire</li>
              <li>
                <a
                  href="mailto:contact@terredecafe.ci"
                  className="transition-colors hover:text-brown-300"
                >
                  contact@terredecafe.ci
                </a>
              </li>
              <li>
                <a
                  href="tel:+2250000000000"
                  className="transition-colors hover:text-brown-300"
                >
                  +225 00 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} TERREDECAFE. Tous droits réservés.
          </p>
          <p className="text-sm text-white/40">
            Café · Thé · OCS · Abidjan
          </p>
        </div>
      </div>
    </footer>
  );
}
