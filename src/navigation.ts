import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Diagnóstico (50€)',
      href: '#diagnostico',
    },
  ],
  actions: [
    {
      text: 'Iniciar Proceso',
      href: '#diagnostico',
      variant: 'primary',
      icon: 'tabler:steering-wheel',
    },
  ],
};

export const footerData = {
  links: [], // Mantenemos el footer limpio para la landing
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © 2026 <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://viasegura.co/"> V-HUB ViaSegura</a>. Todos los derechos reservados.
  `,
};
