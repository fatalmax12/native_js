/* Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями. Массив должен содержать объекты со свойствами:

value — значение для атрибута value тэга option
label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.

Возвращаемое значение — DOM-элемент select.
Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>. Внутри другого тэга script перед </body> поместите код, который создаст новый select с произвольным массивом значений и поместит его в любое место в body. */

/* Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:

Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, 'три', 'четыре', ...]
Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... } */

function createDropDownList(items, selectedValue) {
  let dataItems = items;
  let normalizeItemsArray = normalizeItems(dataItems);
  let sel = document.createElement('select');
  let opt;
  let searchFlag = false;

  for (let i = 0; i < normalizeItemsArray.length; i++) {
    if (normalizeItemsArray[i].value === selectedValue) {
      opt = document.createElement("option");
      opt.setAttribute('selected','selected');
      opt.value = normalizeItemsArray[i].value;
      opt.text = normalizeItemsArray[i].label;
      sel.add(opt, null);
      searchFlag = true;
    } else {
      opt = document.createElement("option");
      opt.value = normalizeItemsArray[i].value;
      opt.text = normalizeItemsArray[i].label;
      sel.add(opt, null);
    }
    if (i === (normalizeItemsArray.length - 1) && !searchFlag) {
      opt = sel.item(0);
      opt.setAttribute('selected','selected');
    }
  }
  return sel;
}

function normalizeItems(items) {
  let tmpObj, resultArray = [];
  if (Array.isArray(items)) {
    if (typeof(items[0]) === 'string' || typeof(items[0]) === 'number') {
      for (let item of items) {
        tmpObj = {};
        tmpObj.value = String(item);
        tmpObj.label = String(item);
        resultArray.push(tmpObj);
      }
    } else if (typeof(items[0]) === 'object') {
      for (let i = 0; i < items.length; i++) {
        tmpObj = {};
        tmpObj.value = String(items[i].value);
        tmpObj.label = String(items[i].label);
        resultArray.push(tmpObj);
      }
    }
  } else if (typeof(items) === 'object') {
    let keys = Object.keys(items);
    for (let key of keys) {
      tmpObj = {};
      tmpObj.value = String(key);
      tmpObj.label = String(key);
      resultArray.push(tmpObj);
    }
  }
  return resultArray;
}
