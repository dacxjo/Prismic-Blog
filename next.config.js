module.exports = {
  env: {
    // Reference a variable that was defined in the .env.* file and make it available at Build Time
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
  },
}
