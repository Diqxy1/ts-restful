interface IMailConfig {
  driver: 'developer' | 'production';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER,

  defaults: {
    from: {
      email: 'salesapi@gmail.com',
      name: 'SALES-API',
    },
  },
} as IMailConfig;
