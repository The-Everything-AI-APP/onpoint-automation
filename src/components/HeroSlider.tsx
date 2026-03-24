"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "CONTROL4 SMART HOME OF YOUR DREAMS",
    subtitle: "Delivered by a home automation professional",
  },
  {
    image: "/images/hero-2.jpg",
    title: "CONTROL4 SMART HOME OS",
    subtitle: "Your home simplified and under control",
  },
  {
    image: "/images/hero-3.jpg",
    title: "WHEN THE SMALLEST THINGS MATTER MOST",
    subtitle: "Stay informed and in control of everything",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className={`max-w-3xl transition-all duration-700 ${i === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">{slide.subtitle}</p>
              <Link
                href="/contact-us"
                className="inline-block bg-accent hover:bg-accent-hover text-white font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
