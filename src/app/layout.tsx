import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Mulish } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SchemaMarkup";
import "./globals.css";

const frankRuhl = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onpointautomation.vercel.app"),
  title: {
    default: "Onpoint Automation – Control4 Smart Home Specialists | Newcastle & Hunter Valley",
    template: "%s | Onpoint Automation",
  },
  description:
    "Onpoint Automation is Newcastle and Hunter Valley's specialist Control4 smart home installer. We deliver home automation, smart lighting, home theatre, security, and AV solutions across Newcastle, Lake Macquarie, Port Stephens, and Maitland.",
  keywords: [
    "Control4",
    "smart home",
    "home automation",
    "Newcastle",
    "Hunter Valley",
    "Port Stephens",
    "Lake Macquarie",
    "Maitland",
    "smart lighting",
    "home theatre",
    "security cameras",
    "AV installation",
    "Control4 dealer",
    "smart home installer",
  ],
  authors: [{ name: "Onpoint Automation" }],
  creator: "Onpoint Automation",
  publisher: "Onpoint Automation",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Onpoint Automation",
    title: "Onpoint Automation – Control4 Smart Home Specialists | Newcastle & Hunter Valley",
    description:
      "Newcastle and Hunter Valley's specialist Control4 smart home installer. Home automation, smart lighting, home theatre, security and AV solutions.",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 2560,
        height: 1706,
        alt: "Onpoint Automation - Control4 Smart Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onpoint Automation – Control4 Smart Home Specialists",
    description:
      "Newcastle and Hunter Valley's specialist Control4 smart home installer.",
    images: ["/images/hero-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${frankRuhl.variable} ${mulish.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <OrganizationSchema />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
