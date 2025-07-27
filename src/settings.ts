export const profile = {
	fullName: 'Jania Vandevoorde',
	title: 'Computer Science Master\'s Student',
	institute: 'the University of Michigan',
	description: 'TODO',
	interests: [
		{ title: 'Reading', description: 'Description' },
	],
}

export const social = {
	email: 'jania@vdvoorde.com',
	linkedin: 'https://linkedin.com/in/jania-vandevoorde',
	github: 'https://github.com/janiavdv',
}

export const template = {
	website_url: 'https://www.janiavdv.github.io', // Astro needs to know the site’s deployed URL to generate a sitemap
	menu_right: false,
	transitions: true,
	lightTheme: 'cupcake', // Daisy UI Themes
	darkTheme: 'dracula', // Daisy UI Themes
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Jania Vandevoorde',
	default_description: 'Jania Vandevoorde\'s personal website.',
	default_image: '/favicon.svg', // Default image for social sharing
}
