import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { portfolioProjects } from '@/lib/portfolio-data';
import { teamMembers } from '@/app/about/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.itssdrc.com';

  const staticPages = [
    '/',
    '/services',
    '/about',
    '/contact',
    '/portfolio',
    '/blog',
    '/careers',
    '/support',
    '/documentation',
    '/documentation/getting-started',
    '/documentation/cloud-api',
    '/documentation/sdk',
    '/press',
    '/privacy',
    '/terms',
    '/cookies'
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.id}`,
    lastModified: new Date().toISOString(), // Idéalement, utiliser la date du post
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const portfolioPages = portfolioProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const teamPages = teamMembers.map((member) => ({
    url: `${siteUrl}/team/${member.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...portfolioPages,
    ...teamPages
  ];
}
