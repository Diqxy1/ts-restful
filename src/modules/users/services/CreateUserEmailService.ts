import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import path from 'path';
import AppError from '@shared/errors/AppError';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import EtherealMail from '@shared/http/services/EtherealMail';
import generatedPassword from '@shared/http/middlewares/generatePassword';
import mailConfig from '@config/mail/mail';
import SalesMail from '@shared/http/services/SalesMail';
import emailChecker from '../validators/checkers/emailChecker';
import nameChecker from '../validators/checkers/nameChecker';

interface IRequest {
  email: string;
  name: string;
}

export const passwordGenerator = generatedPassword(15);

class CreateUserEmailService {
  public async execute({ email, name }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userEmail = await usersRepository.findByEmail(email);

    if (userEmail) {
      throw new AppError('Email already exists.', 401);
    }

    const user = await usersRepository.findByName(name);

    if (user) {
      throw new AppError('User already exists', 401);
    }

    // checkerEmail
    const validateEmail = emailChecker(email);

    // checkerName
    const validateName = nameChecker(name);

    const passwordHashed = await hash(passwordGenerator, 8);

    const newUser = await usersRepository.create({
      name: validateName,
      email: validateEmail,
      password: passwordHashed,
    });

    await usersRepository.save(newUser);

    //console.log(token);
    const createAccountTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'user_account.hbs',
    );

    if (mailConfig.driver === 'production') {
      await SalesMail.sendMail({
        to: {
          name: name,
          email: email,
        },
        subject: '[API Vendas] Criação de conta',
        templateData: {
          file: createAccountTemplate,
          variables: {
            name: name,
            user: `${newUser.name}`,
            email: `${email}`,
            password: `${passwordGenerator}`,
          },
        },
      });
      return;
    }
    if (mailConfig.driver === 'developer') {
      await EtherealMail.sendMail({
        to: {
          name: name,
          email: email,
        },
        subject: '[API Vendas] Criação de conta',
        templateData: {
          file: createAccountTemplate,
          variables: {
            name: name,
            user: `${newUser.name}`,
            email: `${email}`,
            password: `${passwordGenerator}`,
          },
        },
      });
    } else {
      throw new AppError('Invalid email configuration driver', 503);
    }
  }
}

export default CreateUserEmailService;
