"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { services } from "@/data/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Onpoint Automation"
            width={220}
            height={28}
            className="hidden md:block h-7 w-auto"
            priority
          />
          <Image
            src="/images/logo-mobile.png"
            alt="Onpoint Automation"
            width={160}
            height={20}
            className="md:hidden h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-accent ${pathname === "/" ? "text-accent" : "text-dark"}`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-accent ${pathname.startsWith("/services") ? "text-accent" : "text-dark"}`}
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-white shadow-xl rounded-md border border-gray-100 py-2 min-w-[240px]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-grey-bg hover:text-accent transition-colors"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about-us"
            className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-accent ${pathname === "/about-us" ? "text-accent" : "text-dark"}`}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-accent ${pathname === "/contact-us" ? "text-accent" : "text-dark"}`}
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase px-6 py-3 rounded transition-colors"
          >
            Get A Free Quote
          </Link>
        </nav>

        {/* Mobile Burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark text-white">
          <nav className="flex flex-col">
            <Link href="/" className="px-6 py-4 border-b border-white/10 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <button
              className="px-6 py-4 border-b border-white/10 hover:bg-white/5 text-left flex justify-between items-center"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="bg-black/20">
                <Link href="/services" className="block px-10 py-3 border-b border-white/5 text-sm text-accent" onClick={() => setMobileOpen(false)}>
                  All Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="block px-10 py-3 border-b border-white/5 text-sm hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about-us" className="px-6 py-4 border-b border-white/10 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link href="/contact-us" className="px-6 py-4 border-b border-white/10 hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <Link href="/contact-us" className="mx-6 my-4 bg-accent text-center py-3 rounded font-bold text-sm uppercase" onClick={() => setMobileOpen(false)}>
              Get A Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
