interface HeadItem {
  title: string;
  description: string;
  isProd: boolean;
}

export function generateHeadItems({ title, description, isProd }: HeadItem) {
  return {
    title: title,
    base: isProd ? [{ href: import.meta.env.SITE }] : [],
    meta: isProd
      ? [
          { name: 'theme-color', content: import.meta.env.PUBLIC_THEME_COLOR },
          { name: 'description', content: description },
          { name: 'robots', content: 'noindex' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: import.meta.env.SITE },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          {
            property: 'og:image',
            content: `${import.meta.env.SITE}/social.png`,
          },
          { property: 'twitter:card', content: 'summary_large_image' },
          { property: 'twitter:url', content: import.meta.env.SITE },
          { property: 'twitter:title', content: title },
          { property: 'twitter:description', content: description },
          {
            property: 'twitter:image',
            content: `${import.meta.env.SITE}/social.png`,
          },
        ]
      : [],
    link: isProd
      ? [
          { rel: 'icon', sizes: '32x32', href: '/favicon.ico' },
          { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
          { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
          { rel: 'manifest', href: '/manifest.webmanifest' },
          { rel: 'sitemap', href: '/sitemap-index.xml' },
          { rel: 'author', type: 'text/plain', href: '/humans.txt' },
        ]
      : [],
  };
}
