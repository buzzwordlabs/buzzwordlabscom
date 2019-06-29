const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Buzzword Labs", // Navigation and Site Title
  siteTitleAlt: "Buzzword Labs", // Alternative Site title for SEO
  siteTitleShort: "BL", // short_name for manifest
  siteHeadline: "We make cool things", // Headline for schema.org JSONLD
  siteUrl: "https://buzzwordlabs.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/favicon-96x96.png", // Used for SEO and manifest
  siteDescription: "A place where cool things reside",
  author: "aniravi", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@therealAniRavi", // Twitter Username
  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
