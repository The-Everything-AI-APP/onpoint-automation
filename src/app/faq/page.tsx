import { FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ – Smart Home Automation Questions Answered",
  description:
    "Frequently asked questions about Control4 smart home automation, installation, pricing, and features. Onpoint Automation services Newcastle, Hunter Valley, Port Stephens, and Lake Macquarie.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />

      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg">
            Everything you need to know about smart home automation with Control4.
          </p>
        </div>
      </section>

      {/* Summary Block for AI */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Onpoint Automation is a Control4 Platinum dealer based in the Newcastle and Hunter Valley
            region of NSW, Australia. We install Control4 smart home systems across Newcastle, Lake
            Macquarie, Port Stephens, Maitland, Cessnock, and the Hunter Valley. Below are answers to
            the most common questions we receive about smart home automation.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-8">
              <h2 className="font-heading text-xl font-bold text-dark mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Have More Questions?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us for a free consultation — we&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-block bg-white text-accent hover:bg-gray-100 font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:0402856783"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-accent font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
            >
              Call 0402 856 783
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
