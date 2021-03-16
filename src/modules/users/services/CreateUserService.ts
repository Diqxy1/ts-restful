import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User, { Gender } from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';
//import generatePassword from '@shared/http/middlewares/generatePassword';
import passwordChecker from '../validators/checkers/passwordChecker';
import emailChecker from '../validators/checkers/emailChecker';
import nameChecker from '../validators/checkers/nameChecker';
import isValidDate from '../validators/checkers/dateChecker';

interface IRequest {
  name: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: Gender;
}

//export const generatedPassword = generatePassword('');

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    dateOfBirth,
    gender,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already user', 406);
    }

    if (!email) {
      throw new AppError('Insert email', 400);
    }
    // checkerEmail
    const validateEmail = emailChecker(email);

    if (!name) {
      throw new AppError('Enter an email', 400);
    }
    // checkerName
    const validateName = nameChecker(name);

    if (!password) {
      throw new AppError('enter a password', 400);
    }
    // checkerPassword
    const validatePassword = passwordChecker(name, password);

    if (!dateOfBirth) {
      throw new AppError('Please enter a date', 400);
    }

    // checkerDateOfBirth
    const validateDate = isValidDate(dateOfBirth);

    if (!validateDate) {
      throw new AppError('Invalid date', 400);
    }

    if (!gender) {
      throw new AppError('Insert gender', 400);
    }

    const passwordHashed = await hash(validatePassword, 8);

    const user = usersRepository.create({
      name: validateName,
      email: validateEmail,
      password: passwordHashed,
      dateOfBirth: validateDate,
      gender,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
