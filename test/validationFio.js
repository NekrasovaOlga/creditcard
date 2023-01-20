const validationFio = (fio) => {
  let testFio = fio.match(/^([a-z]+[\s]{1}[a-z]+)$/gi);

  if (testFio == null) {
    return false;
  } else {
    return true;
  }
};

module.exports = validationFio;
