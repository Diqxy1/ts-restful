interface ILength {
  length: number;
}

export default function generatePassword({ length }: ILength): string {
  const min = 1;
  const max = 15;

  const number = Math.floor(Math.random() * (max - min + 1) + min);

  length = number;

  let result = '';

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+-=';

  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

//console.log(generatePassword('length'));
