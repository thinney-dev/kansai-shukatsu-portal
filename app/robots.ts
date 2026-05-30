export const dynamic = "force-static";
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // sitemapのURLをルートドメインに変更
    sitemap: 'https://thinney.co.jp/sitemap.xml',
  }
}