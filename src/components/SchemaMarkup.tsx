export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://onpointautomation.vercel.app/#organization",
    name: "Onpoint Automation",
    description:
      "Onpoint Automation is Newcastle and Hunter Valley's specialist Control4 smart home installer, delivering home automation, smart lighting, home theatre, security, and AV solutions.",
    url: "https://onpointautomation.vercel.app",
    telephone: "+61402856783",
    email: "admin@onpointautomation.com.au",
    logo: "https://onpointautomation.vercel.app/images/logo.png",
    image: "https://onpointautomation.vercel.app/images/hero-1.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Raymond Terrace",
      addressRegion: "NSW",
      postalCode: "2324",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.767,
      longitude: 151.733,
    },
    areaServed: [
      { "@type": "City", name: "Newcastle", "@id": "https://en.wikipedia.org/wiki/Newcastle,_New_South_Wales" },
      { "@type": "City", name: "Lake Macquarie" },
      { "@type": "City", name: "Maitland" },
      { "@type": "City", name: "Port Stephens" },
      { "@type": "City", name: "Cessnock" },
      { "@type": "AdministrativeArea", name: "Hunter Valley" },
    ],
    sameAs: [
      "https://www.facebook.com/onpointautomation",
      "https://www.instagram.com/onpoint_automation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Smart Home Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Control4 Home Automation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Lighting Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Theatre Design & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Room Audio/Video" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security & Access Control" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Networking" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Motorised TV Lifters" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hi-Fi Systems" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://onpointautomation.vercel.app${url}`,
    image: `https://onpointautomation.vercel.app${image}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://onpointautomation.vercel.app/#organization",
      name: "Onpoint Automation",
    },
    areaServed: [
      { "@type": "City", name: "Newcastle" },
      { "@type": "City", name: "Lake Macquarie" },
      { "@type": "City", name: "Maitland" },
      { "@type": "City", name: "Port Stephens" },
      { "@type": "AdministrativeArea", name: "Hunter Valley" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://onpointautomation.vercel.app${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
