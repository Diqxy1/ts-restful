import AppError from '@shared/errors/AppError';

// eslint-disable-next-line
export default function passwordChecker(name: string, password: string) {
  if (password.length <= 3 || password.length >= 20) {
    throw new AppError(
      'Your password must contain between 4 and 20 characters',
      406,
    );
  }

  if (password == name || password == name + name) {
    throw new AppError('Do not use your name in the password', 406);
  }

  if (password == '1234' || password == '4321') {
    throw new AppError("dont't just use numbers in your password", 406);
  }

  if (password == name + 123 || password == 123 + name) {
    throw new AppError('Do not use your name more 123 in the password', 406);
  }

  if (password == name + 321 || password == 321 + name) {
    throw new AppError('Do not use your name more 321 in the password', 406);
  }

  // check if password is strong
  const regex = /\W|_/;

  const passwordChecker = regex.test(password);

  if (passwordChecker == false) {
    throw new AppError('Password too weak', 406);
  }

  return password;
}
