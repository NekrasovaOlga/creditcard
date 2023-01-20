const validation = (cvv, fio, number) => {
  let testFio = fio.match(/^([a-z]+[\s]{1}[a-z]+)$/gi);
  const regCVV = new RegExp('^[0-9]{3}$');
  const testCVV = regCVV.test(cvv) ? true : false;

  const regNumber = new RegExp('^[0-9]{13,16}$');
  const testNumber = regNumber.test(number) ? true : false;

  if (testCVV == false || testNumber == false || testFio == null) {
    return false;
  } else {
    return true;
  }
};

module.exports = validation;
//module.exports = validationCVV;
