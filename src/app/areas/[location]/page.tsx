import { notFound } from "next/navigation";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Area Not Found" };

  return {
    title: `Smart Home Automation ${location.name} | Control4 Installer`,
    description: location.description,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: {
      title: `Smart Home Automation ${location.name} | Onpoint Automation`,
      description: location.description,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) notFound();

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Smart Home Automation in ${location.name}`,
    description: location.description,
    url: `https://onpointautomation.vercel.app/areas/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://onpointautomation.vercel.app/#organization",
      name: "Onpoint Automation",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Areas We Service", url: "/areas/newcastle" },
          { name: location.name, url: `/areas/${slug}` },
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Areas", url: "/areas/newcastle" },
          { name: location.name, url: `/areas/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Areas We Service
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Smart Home Automation in {location.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Control4 smart home installation, service, and support across {location.name} and surrounding suburbs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-dark mb-6">
            Control4 Smart Home Specialists in {location.name}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {location.content}
          </p>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-12">
            <h3 className="font-heading text-xl font-bold text-dark mb-2">
              Why Choose Onpoint Automation in {location.name}?
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#10003;</span>
                Control4 Platinum Dealer — the highest certification level
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#10003;</span>
                Local team based in the Hunter Region — fast response times
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#10003;</span>
                Free consultations and quotes for {location.name} homes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">&#10003;</span>
                Ongoing support and system maintenance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-grey-bg py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-dark text-center mb-4">
            Our Services in {location.name}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer the full range of Control4 smart home solutions to {location.name} homes and businesses.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <h3 className="font-heading text-lg font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-dark mb-6">
            Suburbs We Service in {location.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {location.suburbs.map((suburb) => (
              <span
                key={suburb}
                className="bg-grey-bg text-gray-700 px-3 py-1.5 rounded-full text-sm"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            title={`Map of ${location.name}`}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.mapQuery}&zoom=11`}
            className="w-full h-[400px] rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Make Your {location.name} Home Smarter?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free consultation and quote for your Control4 smart home system.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-accent hover:bg-gray-100 font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

      {/* Cross-links to other locations */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-dark mb-6 text-center">
            We Also Service
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {locations
              .filter((l) => l.slug !== slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/areas/${l.slug}`}
                  className="bg-grey-bg hover:bg-accent hover:text-white text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
