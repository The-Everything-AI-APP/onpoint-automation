import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Onpoint Automation",
};

export default function AboutUs() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about-us" },
        ]}
      />

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/about-hero.jpg"
          alt="Onpoint Automation team delivering professional Control4 smart home installation services"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Welcome to Onpoint Automation
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            About Onpoint Automation
          </h2>
          <h3 className="text-lg text-gray-500 uppercase tracking-wide mb-6">
            Get the Control4 Smart Home of Your Dreams – Delivered by a Home Automation Professional
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            Control4 Smart Home solutions are not one size fits all. They are completely customizable
            solutions perfect for all sorts of spaces and budgets, aimed to make life at home more
            convenient and enjoyable. Our smart home professionals are experts at turning your house
            into a dream haven.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-bold uppercase text-sm px-8 py-3 rounded transition-colors"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

      {/* Platinum Status */}
      <section className="bg-grey-bg py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-security.jpg"
              alt="Control4 Platinum dealer certification showcasing smart home security and automation expertise"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold text-dark mb-6">
              Control4 Platinum Status
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Control4 dealership partner scheme ensures only those with the best knowledge, skill
              and technical ability are allowed to install Control4 products. The Control4 Platinum
              status recognizes the rigorous Control4 training our engineers have undertaken, our depth
              of expertise and ability to offer a higher level of on-going support to our customer base.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Get The Control4 Smart Home Of Your Dreams
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={`Control4 ${service.shortTitle} service by Onpoint Automation`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-heading font-bold text-lg group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
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
