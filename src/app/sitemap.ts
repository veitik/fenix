import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ckfenix.ru'

  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/certificates',
    '/gallery',
    '/reviews',
    '/contacts',
    '/privacy-policy',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
