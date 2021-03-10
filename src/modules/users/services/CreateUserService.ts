import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import generatePassword from '@shared/http/middlewares/generatePassword';

interface IRequest {
  name: string;
  email: string;
  //password: string;
}

export const generatedPassword = generatePassword('');

class CreateUserService {
  public async execute({ name, email }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already user', 406);
    }

    /* if (password.length < 3) {
      throw new AppError('Password too weak', 406);
    }

    if (password == name) {
      throw new AppError('Não utilize seu nome na senha');
    } */

    const passwordHashed = await hash(generatedPassword, 8);

    // eslint-disable-next-line
    console.log('Hash Password:' + passwordHashed);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    // eslint-disable-next-line
    console.log('Password User:' + generatedPassword);

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
