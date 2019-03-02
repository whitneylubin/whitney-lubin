const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Whitney Lubin", // Navigation and Site Title
  siteTitleAlt: "Whitney Lubin Software Engineer", // Alternative Site title for SEO
  siteUrl: "https://whitneylubin.github.io/whitney-lubin", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logos/logo-1024.png", // Used for SEO and manifest
  siteDescription: "PortFolio Site for Whitney Lubin",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@thewhitneylubin", // Twitter Username


  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
