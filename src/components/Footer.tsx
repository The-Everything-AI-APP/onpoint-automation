import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/areas/newcastle" className="hover:text-accent transition-colors">Areas</Link>
            <Link href="/about-us" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
            <Link href="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Follow Us</span>
            <a
              href="https://www.facebook.com/onpointautomation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/onpoint_automation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          Onpoint Automation 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
