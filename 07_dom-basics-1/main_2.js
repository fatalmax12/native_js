function viewText(value, headerElement) {
  let timer = setTimeout(function () {
    headerElement.textContent = value;
  }, 300);
  return timer;
}

document.addEventListener('DOMContentLoaded', function() {
  let input = document.createElement('input');
  let header = document.createElement('h2');
  let timerId;

  document.body.append(input);
  document.body.append(header);

  input.addEventListener('input', function () {
    clearTimeout(timerId);
    timerId = viewText(this.value, header);
  });
});
