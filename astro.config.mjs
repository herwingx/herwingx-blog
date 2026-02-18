// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.herwingx.dev',
	integrations: [
		starlight({
			title: 'Herwingx Labs',
			description: 'Tutoriales y recursos avanzados de desarrollo - Frontend, Backend y DevOps',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			// Configuración de idiomas - 'root' significa sin prefijo de URL
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			// Enlaces sociales
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/herwingx' },
			],
			// Color de acento nativo (Azul)
			customCss: [
				// Solo fuentes personalizadas
				'./src/styles/custom.css',
			],
			// Configuración del sidebar
			sidebar: [
				{
					label: '🏠 Inicio',
					items: [
						{ label: 'Introducción', slug: 'intro' },
					],
				},
				{
					label: '🎨 Frontend',
					collapsed: false,
					autogenerate: { directory: 'frontend' },
				},
				{
					label: '⚙️ Backend',
					collapsed: false,
					autogenerate: { directory: 'backend' },
				},
				{
					label: '🚀 DevOps',
					collapsed: false,
					autogenerate: { directory: 'devops' },
				},
				// Proyectos Específicos (Nivel Raíz)
				{
					label: '🛠️ Tools & Labs',
					collapsed: false,
					autogenerate: { directory: 'tools-labs' },
				},
			],
			// Head personalizado para PWA y SEO
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#1e40af',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/manifest.webmanifest',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-status-bar-style',
						content: 'black-translucent',
					},
				},
				// Open Graph & Twitter Cards
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: 'Herwingx Labs',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},

			],
			// Componentes personalizados
			components: {
				Head: './src/components/Head.astro',
			},
		}),
	],
});
