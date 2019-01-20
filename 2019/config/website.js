const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'nosql:ba - Conferência nosql Bahia', // Navigation and Site Title
  siteTitleAlt: 'nosql:ba', // Alternative Site title for SEO
  siteTitleShort: 'nosql:ba', // short_name for manifest
  siteHeadline: '', // Headline for schema.org JSONLD
  siteUrl: 'https://nosqlba.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'pt-br', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Conferência nosql Bahia',
  author: 'Marcus Silva e Mateus Malaquias', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@nosqlba', // Twitter Username
  ogSiteName: 'nosqlba', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
