const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
    body: document.querySelector('body'),
    buttonStart: document.querySelector('[data-action = start]'),
    buttonStop: document.querySelector('[data-action = stop]'),
};
console.log(refs.body);

refs.buttonStart.addEventListener('click', onchangeColor);
refs.buttonStop.addEventListener('click', onStopColor);


let intervalId = null;

function onchangeColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
   refs.buttonStart.disabled = true;
};

function onStopColor() {
    clearInterval(intervalId);
    refs.buttonStart.disabled = false; 
};


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};