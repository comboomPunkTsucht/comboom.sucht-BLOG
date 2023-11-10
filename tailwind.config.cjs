/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			{
				comboompunksucht: {
          
					"primary": "#000000",
          
					"secondary": "#00ff00",
							 
					"accent": "#ff0000",
							 
					"neutral": "#00ff00",
							 
					"base-100": "#4c4c4c",
							 
					"info": "#0000ff",
							 
					"success": "#00ff00",
							 
					"warning": "#ffff00",
							 
					"error": "#ff0000",
				},
			},
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "comboompunksucht", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
    	styled: true, // include daisyUI colors and design decisions for all components
    	utils: true, // adds responsive and modifier utility classes
    	rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	},
};
