// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AI notes',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jairoFernandez/ai-notes' }],
			sidebar: [
				{
					label: 'Neural Network',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Ejemplo sencillo', slug: 'neural-network' },
						{ label: 'Red neuronal con n capas', slug: 'neural-network/2-layer-neural' },
					],
				},
				{
					label: 'Conceptos',
					items: [
						{ label: 'Función sigmoide', slug: 'neural-network/sigmoid-function' },
						{ label: 'Producto punto', slug: 'neural-network/producto-punto' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	image: {
		service: passthroughImageService(),
	},
});
