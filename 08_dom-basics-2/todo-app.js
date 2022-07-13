function createAppTitle(title) {
  let appTitle = document.createElement('h2');
  appTitle.innerHTML = title;
  return appTitle;
}

function createTodoItemForm() {
  let form = document.createElement('form');
  let input = document.createElement('input');
  let buttonWrapper = document.createElement('div');
  let button = document.createElement('button');

  form.classList.add('input-group', 'mb-3');
  input.classList.add('form-control');
  input.placeholder = 'Введите название нового дела';
  buttonWrapper.classList.add('input-group-append');
  button.classList.add('btn', 'btn-primary');
  button.textContent = 'Добавить дело';

  buttonWrapper.append(button);
  form.append(input);
  form.append(buttonWrapper);

  return {
    form,
    input,
    button
  };
}

function createTodoList() {
  let list = document.createElement('ul');
  list.classList.add('list-group');
  return list;
}

function createTodoItem(name, isDone = false) {
  let item = document.createElement('li');
  let buttonGroup = document.createElement('div');
  let doneButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  item.textContent = name;

  buttonGroup.classList.add('btn-group', 'btn-group-sm');
  doneButton.classList.add('btn', 'btn-success');
  doneButton.textContent = 'Готово';
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.textContent = 'Удалить';

  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);

  item.append(buttonGroup);

  if (isDone) {
    item.classList.add('list-group-item-success');
  }

  return {
    item,
    doneButton,
    deleteButton
  }
}

function createTodoApp(container, title = 'Список дел', cases = [], localStorageKey) {
  let todoAppTitle = title;
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();

  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  todoItemForm.button.disabled = true;
  todoItemForm.input.addEventListener('input', function () {
    if (!todoItemForm.input.value) {
      todoItemForm.button.disabled = true;
    } else {
      todoItemForm.button.disabled = false;
    }
  });

  let returnObj = JSON.parse(localStorage.getItem(String(localStorageKey)));

  if (!returnObj) {
    returnObj = [];
  }
  if (cases.length !== 0 && returnObj.length === 0) {
    for (let i = 0; i < cases.length; i++) {
      returnObj.push(cases[i]);
    }
  }

  // if (cases.length !== 0) {
  //   for (let i = 0; i < cases.length; i++) {
  //     let todoItem = createTodoItem(cases[i].name, cases[i].done);

  //     todoItem.doneButton.addEventListener('click', function () {
  //       todoItem.item.classList.toggle('list-group-item-success');
  //     });

  //     todoItem.deleteButton.addEventListener('click', function () {
  //       if (confirm('Вы уверены?')) {
  //         todoItem.item.remove();
  //       }
  //     });

  //     todoList.append(todoItem.item);
  //   }
  // }

  if (returnObj) {
    for (let i = 0; i < returnObj.length; i++) {
      let todoItem = createTodoItem(returnObj[i].name, returnObj[i].done);

      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
        //Обновление localStorage
        let resultObj = [];
        for (let i = 0; i < returnObj.length; i++) {
          if ((todoItem.item.textContent).indexOf(returnObj[i].name) !== -1) {
            if (returnObj[i].done) {
              returnObj[i].done = false;
            } else {
              returnObj[i].done = true;
            }
          }
          resultObj.push(returnObj[i]);
        }
        localStorage.setItem(String(localStorageKey), JSON.stringify(resultObj));
      });

      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          let resultObj = [];
          //Обновление localStorage после удаления элемента
          for (let i = 0; i < returnObj.length; i++) {
            if ((todoItem.item.textContent).indexOf(returnObj[i].name) === -1) {
              resultObj.push(returnObj[i]);
            }
          }
          localStorage.setItem(String(localStorageKey), JSON.stringify(resultObj));
        }
      });

      todoList.append(todoItem.item);
    }
  }

  todoItemForm.form.addEventListener('submit', function (e) {

    e.preventDefault();

    todoItemForm.button.disabled = true;

    if (!todoItemForm.input.value) {
      return;
    }

    let todoItem = createTodoItem(todoItemForm.input.value);

    todoItem.doneButton.addEventListener('click', function () {
      todoItem.item.classList.toggle('list-group-item-success');
      //Обновление localStorage
      let resultObj = [];
      for (let i = 0; i < returnObj.length; i++) {
        if ((todoItem.item.textContent).indexOf(returnObj[i].name) !== -1) {
          if (returnObj[i].done) {
            returnObj[i].done = false;
          } else {
            returnObj[i].done = true;
          }
        }
        resultObj.push(returnObj[i]);
      }
      localStorage.setItem(String(localStorageKey), JSON.stringify(resultObj));
    });

    todoItem.deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) {
        todoItem.item.remove();
        //Обновление localStorage после удаления элемента
        let resultObj = [];
        for (let i = 0; i < returnObj.length; i++) {
          if ((todoItem.item.textContent).indexOf(returnObj[i].name) === -1) {
            resultObj.push(returnObj[i]);
          }
        }
        localStorage.setItem(String(localStorageKey), JSON.stringify(resultObj));
      }
    });

    todoList.append(todoItem.item);

    returnObj.push({
      name: todoItemForm.input.value + '',
      done: false
    });
    console.log(JSON.stringify(returnObj));
    localStorage.setItem(String(localStorageKey), JSON.stringify(returnObj));

    todoItemForm.input.value = '';
  });
}


export { createTodoApp } ;

