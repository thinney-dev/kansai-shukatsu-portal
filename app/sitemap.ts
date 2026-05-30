export const dynamic = "force-static";
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // URLをルートドメインに変更
      url: 'https://thinney.co.jp',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}