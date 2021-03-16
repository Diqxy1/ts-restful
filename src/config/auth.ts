export default {
  jwt: {
    secret: process.env.APP_SECRET || 'any_secret',
    expiresIn: '1d',
  },
};
