require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    name: "Sharepic Generator – linksjugend ['solid]",
    title: "Sharepic Generator – linksjugend ['solid]",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `linksjugend ['solid] – Sharepic Generator`,
        short_name: `linksjugend ['solid] – Sharepic Generator`,
        start_url: `/`,
        background_color: `#00ffc2`,
        theme_color: `#00ffc2`,
        display: `standalone`,
        icon: `static/assets/images/icon.png`,
      },
    },
  ],
};
