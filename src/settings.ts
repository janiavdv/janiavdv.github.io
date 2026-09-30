export const profile = {
  fullName: "Jania Vandevoorde",
  title: "Computer Science Master's Student",
  institute: "the University of Michigan",
  description: `I graduated from Brown University with a dual degree in Computer Science and Statistics, 
    and I'm now finishing my Master's degree at the University of Michigan. I'm interested in building 
    agentic systems and machine learning infrastructure.`,
  interests: [],
};

export const social = {
  email: "jania@vdvoorde.com",
  linkedin: "https://linkedin.com/in/jania-vandevoorde",
  github: "https://github.com/janiavdv",
};

export const template = {
  website_url: "https://janiavdv.github.io", // Astro needs to know the site's deployed URL to generate a sitemap
  menu_right: false,
  transitions: true,
  lightTheme: "cupcake", // Daisy UI Themes
  darkTheme: "dracula", // Daisy UI Themes
  base: "", // Repository name starting with /
};

export const seo = {
  default_title: "Jania Vandevoorde",
  default_description: "Jania Vandevoorde's personal website.",
  default_image: "/og-image.jpg", // Default image for social sharing
};
