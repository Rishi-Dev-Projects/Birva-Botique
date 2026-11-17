import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://birvaboutique.com';

  return [
    {
      url: baseUrl,
      lastModified: '2026-11-05T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#collections`,
      lastModified: '2026-11-05T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#our-story`,
      lastModified: '2026-11-05T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified: '2026-11-05T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#visit-us`,
      lastModified: '2026-11-05T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
