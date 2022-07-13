/* Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log. */

let n = 0, m = 100, count = 100;
let arr = [], range = 0, numberInRange = 0, min = 0, result = 0;

for (let i = 0; i < count; i++) {
  range = Math.abs(m - n);
  numberInRange = Math.round(Math.random() * range);
  min = Math.min(n, m);
  result = min + numberInRange;
  arr.push(result);
}

console.log(arr);


/* С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».
 */

let str = "Привет, мир!";
let newStr = "";

for (let i = str.length-1; i >= 0; --i) {
  newStr+= str[i];
}

console.log(newStr);

/* Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение. */

let roadMines = [true, false, false, false, false, false, true, false, false, true];
let countExplosion = 0;

for (let i = 0; i < roadMines.length; i++) {
  console.log(roadMines[i]);
  if (roadMines[i]) {
    countExplosion++;
    if (countExplosion === 1) {
      console.log("танк повреждён");
    } else if (countExplosion > 1) {
      console.log("танк уничтожен");
      break;
    }
  }
  console.log(`танк переместился на ${i + 1}`);
}


/* Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}. День недели 1 января должен задаваться с помощью переменной, то есть программа должна корректно работать для любого дня недели, с которого начинается месяц. Подсказка 1: для дней недели можно создать массив с названиями дней, чтобы обращаться к нему по индексу. Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления. */

let firstDayOfWeek = 'Пятница';
let numbersOfMonth = [];
let countDay = 0;
let daysOfWeek = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 1; i < 32; i++) {
  numbersOfMonth.push(i);
}

console.log(numbersOfMonth);

for (j = 0; j < daysOfWeek.length; j++) {
  if (daysOfWeek[j] === firstDayOfWeek) {
    countDay = j;
    break;
  }
}

for (let i = 0; i < numbersOfMonth.length; i++) {
  const ind = (countDay + i) % 7;
  console.log(`${numbersOfMonth[i]} января, ${daysOfWeek[ind]}`);
}






