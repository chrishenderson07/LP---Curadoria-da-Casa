/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html, js}'],
	theme: {
		extend: {
			maxWidth: {
				50: '50rem',
			},

			spacing: {
				'50px': '50px',
				50: '50rem',
				60: '60rem',
				65: '65rem',
				70: '70rem',
				80: '80rem',
			},
		},
		colors: {
			brand: {
				1000: '#000000',
				900: '#1F1F1F',
				800: '#26211D',
				750: '#556051',
				700: '#70755F',
				600: '#A2A791',
				200: '#D9D5D4',
				100: '#FDFAF8',
				000: '#ffffff',
			},

			brandgreen: {
				500: '#CA0000',
				400: '#ece257',
				300: '#009A15',
				200: '#84C954',
			},
		},

		fontFamily: {
			poppins: 'Poppins',
			roboto: 'Roboto',
		},
	},
	plugins: [],
}
