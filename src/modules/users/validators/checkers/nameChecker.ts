import AppError from '@shared/errors/AppError';

// eslint-disable-next-line
export default function nameChecker(name: string) {
  if (name.length >= 3) {
    const regex = /^[a-záàâãéèêíóôõúç_-]+$/i;

    const nameChecker = regex.test(name);

    if (nameChecker == false) {
      throw new AppError('Invalid character in name', 406);
    }

    return name;
  } else {
    throw new AppError('Your name cannot be less than 3 characters', 406);
  }
}
