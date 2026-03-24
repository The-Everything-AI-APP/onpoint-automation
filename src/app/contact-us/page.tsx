import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Onpoint Automation",
};

export default function ContactUs() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
