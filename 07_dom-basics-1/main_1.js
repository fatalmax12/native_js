function startTimer(secondsNumber, viewSecondsElement) {
  let timer = viewSecondsElement;
  let i = secondsNumber;
  timer.textContent = secondsNumber;
  timerId = setInterval(function () {
    timer.textContent = i;
    if (i <= 0) {
      clearInterval(timerId);
    }
    i--;
  }, 1000);
  return timerId;
}

document.addEventListener("DOMContentLoaded", function(){
  let secondsNumber = 0;
  let activeTimerId;
  let secondsField = document.createElement('input');
  let startButton = document.createElement('button');
  let viewSeconds = document.createElement('div');

  secondsField.type = 'number';
  startButton.textContent = 'start';

  document.body.append(secondsField);
  document.body.append(startButton);
  document.body.append(viewSeconds);

  secondsField.addEventListener('input', function () {
    secondsNumber = this.value;
    startButton.addEventListener('click', function () {
      clearInterval(activeTimerId);
      activeTimerId = startTimer(secondsNumber, viewSeconds);
    });
  });
});
