
/* Напишите функцию, которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. В качестве аргументов функция принимает 3 параметра:

Общая сумма корзины
Количество товаров в корзине
Промокод (по умолчанию null)
Правила и порядок (порядок важен!) начисления скидок:

Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции. */

let basketAmount = 50000;
let numberItemsInCart = 11;
let promoСode = 'ДАРИМ300';

function totalAmountDiscounted(basketAmount = 0, numberItemsInCart = 0, promoСode = '') {
  if (promoСode === 'ДАРИМ300') {
    if (basketAmount >= 300) {
      basketAmount-= 300;
    } else {
      basketAmount = 0;
    }
  }
  if (numberItemsInCart >= 10) {
    basketAmount-= (basketAmount * 0.05);
  }
  if (basketAmount > 50000) {
    let difference = basketAmount - 50000;
    basketAmount-= (difference * 0.2);
  }
  if (promoСode === 'СКИДКА15') {
    if (basketAmount >= 20000) {
      basketAmount-= (basketAmount * 0.15);
    }
  }
  return basketAmount;
}

//console.log(totalAmountDiscounted(basketAmount, numberItemsInCart, promoСode));

export default totalAmountDiscounted;
