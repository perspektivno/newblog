/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://kaneru.me',
  generateRobotsTxt: true,
};

module.exports = config;
