import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-block border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
          >
            Our Services
          </Link>
          <Link
            href="/contact-us"
            className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white font-bold uppercase text-sm px-8 py-4 rounded transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
