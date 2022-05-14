const isValidUsername = (value: string | null) => {
  if (!value) return false;
  return true;
};

const isValidPassword = (value: string | null) => {
  if (!value) return false;
  return true;
};

export default {
  isValidUsername,
  isValidPassword,
};