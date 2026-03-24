import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – Onpoint Automation",
};

const packages = [
  {
    name: "Home Security",
    description: "Get smart home security and sleep easier",
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Home Automation",
    description: "Communication and control in one place",
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    name: "Security Cameras",
    description: "Keep your eye on what matters most",
    icon: (
      <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
            Get The Control4 Smart Home Of Your Dreams Delivered By A Home Automation Professional
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="group">
                <Link href={`/services/${service.slug}`} className="block">
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={`Control4 ${service.shortTitle} installation and setup by Onpoint Automation`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-accent text-sm font-semibold hover:underline"
                >
                  Info →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Packages */}
      <section className="bg-grey-bg py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Choose Your Plan
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Smart Home Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  {pkg.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-3">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-accent hover:bg-accent-hover text-white font-bold uppercase text-xs px-6 py-3 rounded transition-colors"
                >
                  Request a Free Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
