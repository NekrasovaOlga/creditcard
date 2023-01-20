const validationCVV = require('./validationCvv');
const validationFio = require('./validationFio');
const validationNumber = require('./validationNumber');

describe('Проверка валидации', () => {
  it('валидация CVV', () => {
    expect(validationCVV('123')).toBe(true);
    expect(validationCVV('12')).toBe(false);
    expect(validationCVV('d12')).toBe(false);
    expect(validationCVV('фма')).toBe(false);
    expect(validationCVV('12.')).toBe(false);
    expect(validationCVV('1234')).toBe(false);
  });

  it('валидация Фамилии и Имени', () => {
    expect(validationFio('Vasya Pupkin')).toBe(true);
    expect(validationFio('Вася Пупкин')).toBe(false);
    expect(validationFio('V1asya Pupkin')).toBe(false);
    expect(validationFio('Vasya')).toBe(false);
  });

  it('валидация номера карты', () => {
    expect(validationNumber('4750657776370372')).toBe(true);
    expect(validationNumber('475065777637037212')).toBe(false);
    expect(validationNumber('47506adcv6370372')).toBe(false);
    expect(validationNumber('475065...6370372')).toBe(false);
  });
});
