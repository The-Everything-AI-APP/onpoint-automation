import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Mulish } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "Onpoint Automation – Get The Control4 Smart Home Of Your Dreams",
  description:
    "Onpoint Automation is a leading smart home, entertainment experience and home technology specialist servicing Newcastle, Hunter Valley and Port Stephens.",
  icons: {
    icon: "/images/favicon.png",
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
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
