/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(35, 77%, 62%)",
				secondary: "hsl(5, 85%, 63%)",
				"very-dark-blue": "hsl(240, 100%, 5%)",
				"dark-grayish-blue": "hsl(236, 13%, 42%)",
				"light-grayish-blue": "hsl(240, 6%, 75%)",
			},
		},
	},
	plugins: [],
};
