import { getCustomRepository } from 'typeorm';

import path from 'path';
import AppError from '@shared/errors/AppError';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import EtherealMail from '@config/mail/EtherealMail';
import CreateUserService, { generatedPassword } from './CreateUserService';

interface IRequest {
  email: string;
  name: string;
}

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

    const createUser = new CreateUserService();

    const newUser = await createUser.execute({
      name,
      email,
    });

    //console.log(token);
    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'user_account.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: name,
        email: email,
      },
      subject: '[API Vendas] Criação de usuario',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: name,
          user: `${newUser.name}`,
          email: `${email}`,
          password: `${generatedPassword}`,
        },
      },
    });
  }
}

export default CreateUserEmailService;
