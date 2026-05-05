import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/atelier", "/brief"].map((path) => ({ url: `https://ecurie-sept-nord.vercel.app${path}`, lastModified: new Date(), priority: path === "" ? 1 : .7 }));
}
