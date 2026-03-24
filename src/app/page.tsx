import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import CallbackBar from "@/components/CallbackBar";
import ContactSection from "@/components/ContactSection";
import { services } from "@/data/services";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CallbackBar />

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Welcome to Onpoint Automation
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
              Smart Home Automation & Audio Visual Specialists
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Onpoint Automation is a leading smart home, entertainment experience and home technology
              specialists. We bring you total home control and peace of mind.
            </p>
            <Link
              href="/about-us"
              className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold uppercase text-sm px-8 py-3 rounded transition-colors"
            >
              About Us
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/welcome-section.jpg"
              alt="Smart home control"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-grey-bg py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How We Can Make Your Home Smart
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Control4 Smart Home solutions are not one size fits all. They are completely customizable
              solutions perfect for all sorts of spaces and budgets, aimed to make life at home more
              convenient and enjoyable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.shortTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-dark mb-2 group-hover:text-accent transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  <span className="inline-block mt-3 text-accent text-sm font-semibold">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three Ways to Control */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Manage Your Smart House From Anywhere Easily
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-14">
            Three Ways to Control Your Home
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-3">Home Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Everything is under control at a moment&apos;s notice, no matter where you are
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-3">Remote Voice Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Communicate with and control your smart home system from any place
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-dark mb-3">Mobile App Control</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can control a house with an app whether at home or away, in real time
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
