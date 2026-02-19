// Configuración V-HUB ViaSegura

export const SITE = {
  name: 'V-HUB',
  site: 'https://viasegura.co',
  base: '/',
  trailingSlash: false,
  googleSiteVerificationId: '',
};

export const I18N = {
  language: 'es',
  textDirection: 'ltr',
};

export const METADATA = {
  title: {
    default: 'V-HUB | Movilidad Segura a España',
    template: '%s — V-HUB',
  },
  description: 'El puente estratégico entre el talento colombiano y las grandes transportadoras españolas.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    site_name: 'V-HUB',
    images: [
      {
        url: '~/assets/images/default.png',
        width: 1200,
        height: 628,
      },
    ],
  },
  twitter: {
    handle: '@viasegura',
    site: '@viasegura',
    cardType: 'summary_large_image',
  },
};

export const APP_BLOG = {
  isEnabled: false, // Desactivamos el blog por ahora para la landing
  postsPerPage: 6,
  post: {
    isEnabled: true,
    permalink: '/%slug%',
    robots: {
      index: true,
    },
  },
  list: {
    isEnabled: true,
    pathname: 'blog',
    robots: {
      index: true,
    },
  },
  category: {
    isEnabled: true,
    pathname: 'category',
    robots: {
      index: true,
    },
  },
  tag: {
    isEnabled: true,
    pathname: 'tag',
    robots: {
      index: false,
    },
  },
  isRelatedPostsEnabled: true,
  relatedPostsCount: 4,
};

export const UI = {
  theme: 'light', // Forzamos tema claro para mayor sobriedad corporativa
};

export const ANALYTICS = {
  vendors: {
    googleAnalytics: {
      id: null,
    },
  },
};
