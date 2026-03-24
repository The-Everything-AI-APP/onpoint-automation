export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  content: string;
  suburbs: string[];
  mapQuery: string;
}

export const locations: Location[] = [
  {
    slug: "newcastle",
    name: "Newcastle",
    region: "Newcastle",
    description: "Control4 smart home automation installation in Newcastle, NSW. Onpoint Automation delivers home automation, smart lighting, home theatre, and security solutions across all Newcastle suburbs.",
    content: "Newcastle is the heart of the Hunter Region and home to a thriving mix of heritage properties and modern developments. Whether you own a character home in Merewether or a new build in Fletcher, Onpoint Automation can design and install a Control4 smart home system tailored to your property. Our Newcastle clients love the convenience of controlling lighting, entertainment, and security from a single device — perfect for the coastal lifestyle. From automated blinds that respond to the afternoon sea breeze to whole-home audio for entertaining, we make Newcastle homes smarter.",
    suburbs: [
      "Adamstown", "Bar Beach", "Broadmeadow", "Carrington", "Cooks Hill", "Elermore Vale",
      "Fletcher", "Georgetown", "Hamilton", "Hamilton South", "Islington", "Jesmond",
      "Kotara", "Lambton", "Maryland", "Mayfield", "Merewether", "Merewether Heights",
      "New Lambton", "New Lambton Heights", "Newcastle", "Newcastle East", "Newcastle West",
      "Rankin Park", "Shortland", "Stockton", "The Hill", "The Junction", "Tighes Hill",
      "Wallsend", "Waratah", "Wickham",
    ],
    mapQuery: "Newcastle+NSW+Australia",
  },
  {
    slug: "lake-macquarie",
    name: "Lake Macquarie",
    region: "Lake Macquarie",
    description: "Smart home automation for Lake Macquarie homes. Control4 installation, home theatre, smart lighting, and security systems across Charlestown, Belmont, Warners Bay, Toronto, and all Lake Macquarie suburbs.",
    content: "Lake Macquarie is one of Australia's largest coastal lakes, and the suburbs surrounding it are home to families who value comfort, security, and lifestyle. Onpoint Automation brings Control4 smart home technology to Lake Macquarie — from waterfront properties in Warners Bay to family homes in Charlestown and Cameron Park. Smart security systems are especially popular with our Lake Macquarie clients, giving peace of mind whether you're at home or enjoying the lake. Multi-room audio lets you take your music from the kitchen to the outdoor entertaining area seamlessly.",
    suburbs: [
      "Belmont", "Belmont North", "Blacksmiths", "Bolton Point", "Cameron Park",
      "Cardiff", "Cardiff Heights", "Catherine Hill Bay", "Caves Beach", "Charlestown",
      "Coal Point", "Dudley", "Edgeworth", "Eleebana", "Gateshead", "Glendale",
      "Jewells", "Kahibah", "Marks Point", "Morisset", "Mount Hutton", "Rathmines",
      "Redhead", "Speers Point", "Swansea", "Swansea Heads", "Teralba", "Toronto",
      "Valentine", "Wangi Wangi", "Warners Bay", "West Wallsend", "Whitebridge",
    ],
    mapQuery: "Lake+Macquarie+NSW+Australia",
  },
  {
    slug: "maitland",
    name: "Maitland",
    region: "Maitland",
    description: "Control4 smart home installation in Maitland and surrounds. Home automation, smart lighting, home theatre, and security for Maitland, Thornton, Rutherford, East Maitland, and the lower Hunter.",
    content: "Maitland is one of the fastest-growing regions in the Hunter, with new housing estates in Thornton, Gillieston Heights, and Lochinvar creating the perfect opportunity to build smart from the ground up. Onpoint Automation works with builders and homeowners across Maitland to integrate Control4 smart home systems during construction — saving time and money compared to retrofitting. For established homes in Lorn, Morpeth, and East Maitland, we specialise in wireless and hybrid solutions that add smart home capability without major renovation work.",
    suburbs: [
      "Aberglasslyn", "Ashtonfield", "Bolwarra", "Bolwarra Heights", "Chisholm",
      "East Maitland", "Farley", "Gillieston Heights", "Lochinvar", "Lorn",
      "Maitland", "Metford", "Morpeth", "Oakhampton", "Raworth", "Rutherford",
      "Telarah", "Tenambit", "Thornton", "Windella",
    ],
    mapQuery: "Maitland+NSW+Australia",
  },
  {
    slug: "port-stephens",
    name: "Port Stephens",
    region: "Port Stephens",
    description: "Smart home automation in Port Stephens. Control4 installation for Nelson Bay, Salamander Bay, Raymond Terrace, Medowie, and all Port Stephens areas. Home theatre, security, smart lighting specialists.",
    content: "Port Stephens is known for its stunning coastline and relaxed lifestyle — and smart home technology fits right in. Onpoint Automation is based in the Port Stephens area and services every suburb from Nelson Bay to Raymond Terrace. Holiday homes benefit hugely from smart security and remote monitoring — check cameras, lock doors, and control lighting from anywhere in the world. Permanent residents love our whole-home audio solutions, perfect for indoor-outdoor entertaining in the beautiful Port Stephens climate. From Soldiers Point waterfront properties to new builds in Medowie, we design systems that match your lifestyle.",
    suburbs: [
      "Anna Bay", "Boat Harbour", "Corlette", "Fern Bay", "Fingal Bay",
      "Lemon Tree Passage", "Mallabula", "Medowie", "Nelson Bay", "One Mile",
      "Raymond Terrace", "Salamander Bay", "Salt Ash", "Shoal Bay",
      "Soldiers Point", "Tanilba Bay", "Taylors Beach", "Tomago", "Williamtown",
    ],
    mapQuery: "Port+Stephens+NSW+Australia",
  },
  {
    slug: "hunter-valley",
    name: "Hunter Valley",
    region: "Hunter Valley",
    description: "Control4 smart home automation for Hunter Valley properties. Luxury home automation, entertainment systems, smart lighting, and security for Pokolbin, Lovedale, Cessnock, Singleton, and the wine country.",
    content: "The Hunter Valley is synonymous with luxury — from world-class wineries to stunning rural estates. Onpoint Automation delivers Control4 smart home systems that match the prestige of Hunter Valley properties. Our wine country clients love whole-home entertainment systems for hosting guests, automated lighting that sets the mood from sunset drinks to dinner parties, and security systems that protect their investment. Whether it's a boutique accommodation in Pokolbin, a rural retreat in Lovedale, or a family home in Cessnock, we design smart home solutions that enhance the Hunter Valley lifestyle.",
    suburbs: [
      "Branxton", "Broke", "Cessnock", "Greta", "Heddon Greta", "Kitchener",
      "Kurri Kurri", "Lovedale", "Neath", "North Rothbury", "Nulkaba",
      "Pokolbin", "Rothbury", "Singleton", "Weston", "Wollombi",
    ],
    mapQuery: "Hunter+Valley+NSW+Australia",
  },
  {
    slug: "cessnock",
    name: "Cessnock",
    region: "Cessnock",
    description: "Smart home installation in Cessnock. Control4 home automation, smart lighting, home theatre, and security systems for Cessnock, Kurri Kurri, Branxton, and surrounding suburbs.",
    content: "Cessnock and the surrounding suburbs are growing fast, with new developments and renovations creating opportunities for modern smart home technology. Onpoint Automation brings Control4 smart home systems to Cessnock — from established homes in Cessnock CBD and Kurri Kurri to new builds in Branxton and Cliftleigh. Smart lighting is especially popular with our Cessnock clients, offering energy savings, enhanced security with automated timers and motion sensors, and the convenience of controlling every light in the house from your phone. We also service the nearby wine country with premium entertainment and security solutions.",
    suburbs: [
      "Aberdare", "Abermain", "Bellbird", "Branxton", "Cessnock", "Greta",
      "Heddon Greta", "Kitchener", "Kurri Kurri", "Neath", "Paxton", "Weston",
    ],
    mapQuery: "Cessnock+NSW+Australia",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
