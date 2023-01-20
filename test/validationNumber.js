const validationNumber = (number) => {
  const regNumber = new RegExp('^[0-9]{13,16}$');
  const testNumber = regNumber.test(number) ? true : false;

  if (!testNumber) {
    return false;
  } else {
    return true;
  }
};

module.exports = validationNumber;
