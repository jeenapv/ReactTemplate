import { isEmail } from 'validator';

const minLength = {
  test: (val, threshold) => val.length > parseInt(threshold),
  message: (val, threshold) => `Value must be greater than ${threshold}.`,
};

const email = {
  test: isEmail,
  message: 'Please input a valid email address.',
};

export default {
  minLength,
  email,
};
