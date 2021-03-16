import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
//import generatePassword from '@shared/http/middlewares/generatePassword';
import passwordChecker from '../validators/passwordChecker';
import emailChecker from '../validators/emailChecker';
import nameChecker from '../validators/nameChecker';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

//export const generatedPassword = generatePassword('');

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already user', 406);
    }

    // checkerEmail
    const validateEmail = emailChecker(email);

    // checkerName
    const validateName = nameChecker(name);

    // checkerPassword
    const validatePassword = passwordChecker(name, password);

    const passwordHashed = await hash(validatePassword, 8);

    const user = usersRepository.create({
      name: validateName,
      email: validateEmail,
      password: passwordHashed,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
