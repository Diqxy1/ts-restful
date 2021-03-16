import AppError from '@shared/errors/AppError';

// eslint-disable-next-line
export default function isValidDate(dateOfBirth: string) {
  const dateofbirth = dateOfBirth.toString();

  const temp = dateofbirth.split(' ');

  const year = temp[3];
  const month = temp[1];
  const day = +temp[2];

  const year1 = +temp[3];
  const month1 = +temp[1];

  const date = year + '/' + month + '/' + day;

  const valid_year = '1960';

  if (year <= valid_year) {
    throw new AppError('Data invalida');
  }
  if (year >= valid_year) {
    const newDate = new Date();

    const current_year = newDate.getFullYear();
    const current_month = newDate.getMonth() + 1;
    const current_day = newDate.getDate();

    let full_year = current_year - year1;

    if (
      current_month < month1 ||
      (current_month == month1 && current_day < day)
    ) {
      full_year--;
    }

    if (full_year < 18) {
      throw new AppError('It is not possible to register minors under 18', 400);
    } else {
      return date;
    }
  }
}
