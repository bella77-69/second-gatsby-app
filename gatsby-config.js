module.exports = {
  siteMetadata: {
    title: "Chantelle Mckenzie",
    description: "I am learning, GraphQL and Gatsby",
    author: "Bella77-69",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
