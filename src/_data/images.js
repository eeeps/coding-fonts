const isDeployPreview = process.env.CONTEXT === 'deploy-preview';
const isProd = process.env.PROD === 'true' && !isDeployPreview;

module.exports = {
  imageLocation: isProd ? 'https://coding-fonts.css-tricks.com' : '',
  urlPrefixLarge: isProd
    ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_1600/'
    : '',
  urlPrefixMedium: isProd
    ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_1200/'
    : '',
  urlPrefixSmall: isProd
    ? 'https://res.cloudinary.com/css-tricks/image/fetch/w_600/'
    : ''
};
