import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { services, getServiceBySlug } from "@/data/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} – Newcastle & Hunter Valley`,
    description: `${service.subtitle} Onpoint Automation installs Control4 ${service.shortTitle.toLowerCase()} systems across Newcastle, Lake Macquarie, Port Stephens, Maitland, and Hunter Valley.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | Onpoint Automation`,
      description: service.subtitle,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.subtitle}
        url={`/services/${slug}`}
        image={service.image}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.shortTitle, url: `/services/${slug}` },
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.shortTitle, url: `/services/${slug}` },
        ]}
      />

      {/* Hero Banner */}
      <section className="bg-dark py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{service.title}</h1>
          <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">{service.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-dark mb-4">{service.title}</h2>
              <div className="space-y-4">
                {service.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
                ))}
              </div>

              {/* Service area callout */}
              <div className="mt-8 p-4 bg-grey-bg rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Available across:</strong>{" "}
                  <Link href="/areas/newcastle" className="text-accent hover:underline">Newcastle</Link>,{" "}
                  <Link href="/areas/lake-macquarie" className="text-accent hover:underline">Lake Macquarie</Link>,{" "}
                  <Link href="/areas/port-stephens" className="text-accent hover:underline">Port Stephens</Link>,{" "}
                  <Link href="/areas/maitland" className="text-accent hover:underline">Maitland</Link>,{" "}
                  <Link href="/areas/hunter-valley" className="text-accent hover:underline">Hunter Valley</Link>
                </p>
              </div>

              <Link
                href="/contact-us"
                className="inline-block mt-6 bg-accent hover:bg-accent-hover text-white font-bold uppercase text-sm px-8 py-3 rounded transition-colors"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-grey-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-heading text-2xl font-bold text-dark text-center mb-10">
            Other Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.shortTitle}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading text-sm font-bold text-dark group-hover:text-accent transition-colors">
                      {s.shortTitle}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
