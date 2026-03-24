import { services } from "@/data/services";
import { locations } from "@/data/locations";

const baseUrl = "https://onpointautomation.vercel.app";

export async function GET() {
  const serviceItems = services.map(
    (s) => `    <item>
      <title>${escapeXml(s.title)} – Onpoint Automation</title>
      <link>${baseUrl}/services/${s.slug}</link>
      <guid isPermaLink="true">${baseUrl}/services/${s.slug}</guid>
      <description>${escapeXml(s.description)}</description>
    </item>`
  );

  const locationItems = locations.map(
    (l) => `    <item>
      <title>Smart Home Automation in ${escapeXml(l.name)} – Onpoint Automation</title>
      <link>${baseUrl}/areas/${l.slug}</link>
      <guid isPermaLink="true">${baseUrl}/areas/${l.slug}</guid>
      <description>${escapeXml(l.description)}</description>
    </item>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Onpoint Automation – Control4 Smart Home Specialists</title>
    <link>${baseUrl}</link>
    <description>Onpoint Automation is Newcastle and Hunter Valley's specialist Control4 smart home installer. Home automation, smart lighting, home theatre, security, and AV solutions.</description>
    <language>en-au</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${serviceItems.join("\n")}
${locationItems.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
