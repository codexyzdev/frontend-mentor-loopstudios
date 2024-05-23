/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				alata: "'Alata', sans-serif ",
				josefin: "'Josefin Sans', sans-serif ",
			},
		},
		colors: {
			'black': 'hsl(0, 0%, 0%)',
			'white': 'hsl(0, 0%, 100%)',
			'dark-gray': 'hsl(0, 0%, 55%)',
			'very-dark-gray': 'hsl(0, 0%, 41%)',
		},
		
	},
	plugins: [],
}
