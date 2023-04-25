/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"2xs": "0.688rem",
			},
			colors: {
				purple: "hsl(259, 100%, 65%)",
				"light-red": "hsl(0, 100%, 67%)",
				"off-white": "hsl(0, 0%, 94%)",
				"light-grey": "hsl(0, 0%, 86%)",
				"smokey-grey": "hsl(0, 1%, 44%)",
				"off-black": "hsl(0, 0%, 8%)",
			},
			screens: {
				laptop: "650px",
				mobile: "500px",
			},
		},
	},
	plugins: [],
};
