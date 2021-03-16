// eslint-disable-next-line
export default function generatePassword(length: number) {
  const min = 10;
  const max = 20;

  const number = Math.floor(Math.random() * (max - min + 1) + min);

  length = number;

  let result = '';

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*()_+-=<>?';

  const mixCharacters = characters + '!@#$%¨&*()_+-=<>?';

  const charactersLength = mixCharacters.length;

  for (let i = 0; i < length; i++) {
    result += mixCharacters.charAt(
      Math.floor(Math.random() * charactersLength),
    );
  }

  return result;
}

//console.log(generatePassword('length'));
