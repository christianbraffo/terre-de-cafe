import { siteConfig } from "@/lib/site";
import { faqs } from "@/lib/faqs";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo}`,
      width: 1086,
      height: 1448,
    },
    image: [
      `${siteConfig.url}${siteConfig.ogImage}`,
      `${siteConfig.url}${siteConfig.logo}`,
    ],
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Abidjan",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      availableLanguage: ["French"],
      areaServed: "CI",
    },
    knowsAbout: [
      "Office Coffee Service",
      "Café de bureau",
      "Machines à café professionnelles",
      "Thé en entreprise",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "fr-CI",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "fr-CI",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Office Coffee Service (OCS)",
    serviceType: "Café de bureau pour entreprises",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Abidjan",
    },
    description:
      "Fourniture de machines professionnelles, café et thé de qualité, installation et maintenance pour les entreprises à Abidjan.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
