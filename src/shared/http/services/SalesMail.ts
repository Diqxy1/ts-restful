import AppError from '@shared/errors/AppError';
import nodemailer from 'nodemailer';

import handlebarsMailTemplate from '@config/mail/HandlebarsMailTemplate';
import mailConfig from '@config/mail/mail';

interface IMailContact {
  name: string;
  email: string;
}

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParserMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParserMailTemplate;
}

export default class SalesMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const mailTemplate = new handlebarsMailTemplate();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465, //request tls
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const { name, email } = mailConfig.defaults.from;

    try {
      transporter.verify(async function (error) {
        if (error) {
          throw new AppError('Error: ' + error);
        } else {
          await transporter.sendMail({
            from: {
              name: from?.name || name,
              address: from?.email || email,
            },
            to: {
              name: to.name,
              address: to.email,
            },
            subject,
            html: await mailTemplate.parse(templateData),
          });
        }
      });
    } catch {
      throw new AppError('Validation error', 503);
    }
  }
}
