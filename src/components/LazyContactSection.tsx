"use client";

import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

export default function LazyContactSection() {
  return <ContactSection />;
}
