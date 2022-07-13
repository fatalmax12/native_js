/* Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов. */

let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
  ]

function filterArrayByObjectProperty(elements, filteredKey, filteredValue) {
  let resultArray = [];
  for (let element of elements) {
    if (element[filteredKey] === filteredValue) {
      resultArray.push(element);
    }
  }
  return resultArray;
}

let result = filterArrayByObjectProperty(objects, 'name', 'Иван');

console.log(result);
export default filterArrayByObjectProperty;


