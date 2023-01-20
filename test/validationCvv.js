const validationCvv = (cvv) => {
  const regCVV = new RegExp('^[0-9]{3}$');
  const testCVV = regCVV.test(cvv) ? true : false;

  if (!testCVV) {
    return false;
  } else {
    return true;
  }
};

module.exports = validationCvv;
