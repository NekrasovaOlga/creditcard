import { el, setChildren, setAttr } from 'redom';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
const validation = require('./validation.js');

let cardName, cardDate, cardNumber;

const cartCreate = () => {
  cardName = el('span', { className: 'card__name', textContent: 'John Doe' });
  cardDate = el('span', { className: 'card__date', textContent: '04/24' });

  const cardPersonal = el('div', { className: 'card__personal' }, [
    cardName,
    cardDate,
  ]);

  cardNumber = el('span', {
    className: 'card__number',
    textContent: 'xxxx xxxx xxxx xxxx',
  });

  const cartElem = el('p', {
    className: 'secure',
    textContent: 'Secure Checkout',
  });

  return [
    cartElem,
    el('div', { className: 'credit-card' }, [cardNumber, cardPersonal]),
  ];
};

const createForm = () => {
  const wrapHolder = el(
    'div',
    { className: 'form__input-wrap form__input-wrap_holder' },
    [
      el('label', {
        className: 'form__label form__holder-label',
        textContent: 'Card Holder',
      }),
      el('input', {
        className: 'input input__holder',
        type: 'text',
        name: 'cardFio',
      }),
    ]
  );

  const wrapError = el('h2', {
    className: 'error_block',
    textContent: 'Ошибка валидации',
  });

  const wrapSuccess = el('h2', {
    className: 'success_block',
    textContent: 'Данные валидны',
  });

  const wrapNumber = el(
    'div',
    { className: 'form__input-wrap form__input-wrap_number' },
    [
      el('label', {
        className: 'form__label form__number-label',
        textContent: 'Card Number',
      }),
      el('input', {
        className: 'input input__number',
        id: 'cardNumber',
        name: 'cardNumber',
      }),
    ]
  );

  const wrapDate = el(
    'div',
    { className: 'form__input-wrap form__input-wrap_date' },
    [
      el('label', {
        className: 'form__label form__date-label',
        textContent: 'Card Expiry',
      }),
      el('input', {
        className: 'input input__date',
        type: 'text',
        name: 'date',
        onmouseover(event) {
          new AirDatepicker(event.target, {
            view: 'months',
            minView: 'months',
            dateFormat: 'MM/yy',
          });
        },
        oninput(event) {
          const targetId = event.target;
          const cardDateMask = new Inputmask('99/99');
          cardDateMask.mask(targetId);
          setAttr(cardDate, { textContent: targetId.value });
        },
      }),
    ]
  );

  const wrapCVV = el(
    'div',
    { className: 'form__input-wrap form__input-wrap_cvv' },
    [
      el('label', {
        className: 'form__label form__cvv-label',
        textContent: 'CVV',
      }),
      el('input', {
        className: 'input input__cvv',
        type: 'text',
        name: 'cvv',
      }),
    ]
  );

  const buttonSubmit = el('button', {
    className: 'form__button',
    textContent: 'CHECK OUT',
    type: 'submit',
  });

  const form = el(
    'form',
    {
      className: 'form',
      id: 'form',
      onsubmit(event) {
        event.preventDefault();
        const data = {
          fio: form.cardFio.value,
          number: form.cardNumber.value,
          date: form.date.value,
          cvv: form.cvv.value,
        };
        const result = validation(data.cvv, data.fio, data.number);
        if (!result) {
          wrapError.style.display = 'flex';
          setTimeout(() => {
            wrapError.style.display = 'none';
          }, 2000);
        } else {
          wrapSuccess.style.display = 'flex';
          setTimeout(() => {
            wrapSuccess.style.display = 'none';
          }, 2000);
        }
      },
    },
    [
      wrapError,
      wrapSuccess,
      wrapHolder,
      wrapNumber,
      wrapDate,
      wrapCVV,
      buttonSubmit,
    ]
  );

  return form;
};

const createElement = () => {
  return el(
    'div',
    { className: 'wrapper' },
    el('div', { className: 'card' }, cartCreate(), createForm())
  );
};

setChildren(document.body, createElement());
