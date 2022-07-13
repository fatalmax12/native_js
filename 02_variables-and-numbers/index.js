/* Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log. */

// Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
// Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
// Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
// Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
// Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0.

//let x1 = 2, y1 = 3, x2 = 10, y2 = 5;
//let x1 = 10, y1 = 5, x2 = 2, y2 = 3;
//let x1 = -5, y1 = 8, x2 = 10, y2 = 5;
//let x1 = 5, y1 = 8, x2 = 5, y2 = 5;
let x1 = 8, y1 = 1, x2 = 5, y2 = 1;

let a1 = Math.abs(x2 - x1);
let a2 = Math.abs(y2 - y1);

console.log(a1 * a2);

/* Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log. */

/* Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891. */

//let a = 13.123456789, b = 2.123, n = 5;
//let a = 13.890123, b = 2.891564, n = 2;
let a = 13.890123, b = 2.891564, n = 3;

function normalized(num, precision) {
  return Math.round((num % 1) * Math.pow(10, precision));
}

let first = normalized(a, n);
let second = normalized(b, n);

console.log(first + "," + second);
console.log("===", first === second);
console.log(">", first > second);
console.log("<", first < second);
console.log("!=", first != second);
console.log(">=", first >= second);
console.log("<=", first <= second);

/* Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log. */

/* n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10. */

//let n = 0, m = 100;
//let n = 2, m = 5;
// let n = 100, m = -5;
let n = -3, m = -10;

let range = Math.abs(m - n);

let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);

let result = min + numberInRange;

if(result % 2 == 0){
  if(result == range){
    result  = result - 1;
  } else {
    result  = result + 1;
  }
}
 console.log(result);
