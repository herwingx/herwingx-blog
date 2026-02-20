import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const docs = await getCollection('docs');

  // Filtrar páginas especiales (index, 404, páginas sin título)
  const filtered = docs.filter((doc) => {
    const slug = doc.id;
    return (
      slug !== 'index' &&
      slug !== '404' &&
      !slug.endsWith('/index') &&
      doc.data.title
    );
  });

  return rss({
    title: 'Herwingx Labs',
    description:
      'Tutoriales y recursos avanzados de desarrollo - Frontend, Backend y DevOps',
    site: context.site,
    items: filtered.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description || '',
      pubDate: doc.data.date || new Date(),
      link: `/${doc.id}/`,
    })),
    customData: '<language>es</language>',
  });
}
