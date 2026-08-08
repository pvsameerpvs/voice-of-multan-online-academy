export const siteConfig = {
  name: "Voice of Multan Online Academy",
  shortName: "Voice of Multan",
  tagline: "Empowering Students Through Smart Digital Learning",
  description:
    "Premium online academy offering Nursery to Grade 10 tuition, Mathematics specialist classes, Computer Science, Digital Marketing and professional certification programs — from Multan to the world.",
  url: "https://voiceofmultanacademy.com",
  contactEmail: "info@voiceofmultanacademy.com",
  phone: "+92 300 1234567",
  whatsapp: "923001234567",
  address: {
    street: "Jinnah Colony",
    city: "Multan",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
    postalCode: "60000",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  stats: {
    students: 500,
    teachers: 10,
    successRate: 95,
    certificates: 100,
  },
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url;

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Hi Voice of Multan Online Academy! I'd like to enquire about enrolling.",
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}