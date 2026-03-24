"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="grid md:grid-cols-2">
      {/* Left - Contact Info */}
      <div className="bg-blue text-white p-12 md:p-16 flex flex-col justify-center">
        <p className="text-sm uppercase tracking-widest mb-2 text-white/70">We are here to help</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10">Feel Free to Contact Us</h2>

        <div className="space-y-8">
          <div>
            <h6 className="text-sm uppercase tracking-widest mb-1 text-white/70">Servicing</h6>
            <p className="text-lg">Newcastle – Hunter Valley – Port Stephens</p>
          </div>
          <div>
            <h6 className="text-sm uppercase tracking-widest mb-1 text-white/70">Email</h6>
            <a href="mailto:admin@onpointautomation.com.au" className="text-lg hover:text-accent transition-colors">
              admin@onpointautomation.com.au
            </a>
          </div>
          <div>
            <h6 className="text-sm uppercase tracking-widest mb-1 text-white/70">Phone</h6>
            <a href="tel:0402856783" className="text-lg hover:text-accent transition-colors">
              0402 856 783
            </a>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="bg-grey-bg p-12 md:p-16 flex flex-col justify-center">
        <h3 className="font-heading text-2xl font-bold text-dark mb-6">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded text-sm focus:outline-none focus:border-accent transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-accent hover:bg-accent-hover text-white font-bold uppercase text-sm px-8 py-3 rounded transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
