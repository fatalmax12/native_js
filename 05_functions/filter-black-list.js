/* Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.

В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции. */

let emails = ['a@a.ru','b@a.ru','c@a.ru','d@a.ru'];
let emailsInBlacklist = ['b@a.ru','d@a.ru'];

function getEmailsNotInBlacklist(emails = [], emailsInBlacklist = []) {
  let emailsInWhitelist = [];
  for (let email of emails) {
    let include = emailsInBlacklist.includes(email);
    if (!include) {
      emailsInWhitelist.push(email);
    }
  }
  return emailsInWhitelist;
}

//console.log(getEmailsNotInBlacklist(emails, emailsInBlacklist));

export default getEmailsNotInBlacklist;
