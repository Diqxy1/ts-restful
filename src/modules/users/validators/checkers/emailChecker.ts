import AppError from '@shared/errors/AppError';

// eslint-disable-next-line
export default function emailChecker(email: string) {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const emailChecker = regex.test(email);

  if (emailChecker == false) {
    throw new AppError('Invalid email', 406);
  }

  return email;
}
