import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already user', 406);
    }

    if (password.length < 3) {
      throw new AppError('Password too weak', 406);
    }

    const passwordHashed = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
