const validatePhone = (phone) => {
  const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return regexPhone.test(phone);
};

const validateEmail = (email) => {
  const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return regexEmail.test(email);
};

const validatePassword = (password) => {
  const regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return regexPass.test(password);
};

export {
  validatePhone,
  validateEmail,
  validatePassword,
};
