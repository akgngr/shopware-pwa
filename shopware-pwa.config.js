module.exports = {
  shopwareEndpoint: process.env.SW_ENDPOINT,
  shopwareAccessToken: process.env.SW_TOKEN,
  shopwareApiClient: {
    // optional, allow to override the default settings
    timeout: 5000, // timeout limit in ms
  },
  shopwareDomainsAllowList: [
    "http://localhost:3000",
    "http://localhost:3000/de",
    "https://pwa=shop.com",
  ],
}
