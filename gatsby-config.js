module.exports = {
  siteMetadata: {
    title: `cilice.me`,
    description: `Alexander Plavinski is a front end developer from Germany`,
    author: `Alexander Plavinski`,
  },
  __experimentalThemes: [
    {
      resolve: '@jxnblk/gatsby-theme-mdx-blog',
      options: {
        // name: '',
      },
    },
  ],
  plugins: [`gatsby-plugin-netlify`],
};
