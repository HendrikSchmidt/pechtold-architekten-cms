module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '100b0da86e3cd3acf7031b58811da8fa'),
  },
});
