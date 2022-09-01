const bubbleSort = require('./algorithms/bubbleSort');
const insertionSort = require('./algorithms/insertionSort');
const mergeSort = require('./algorithms/mergeSort');
const quickSort = require('./algorithms/quickSort');
const { randomIntFromInterval } = require('./utils/utils');

const generateNewArray = () => {
  const size = parseInt(document.getElementById('array-size').value);
  const arrayContainer = document.getElementById('array-container');
  arrayContainer.innerHTML = '';

  const width = Math.floor(document.body.clientWidth / (size * 3));
  const margin = size < 5 ? 10 : size < 8 ? 8 : size < 11 ? 6 : size < 20 ? 4 : size < 50 ? 3.5 : size < 100 ? 3 : size < 130 ? 2.5 : 2;
  const color = width > 20 ? 'white' : 'transparent';

  for (let i = 0; i < size; i++) {
    const arrayBar = document.createElement('div');
    arrayBar.classList.add('array-bar');

    const randomHeight = randomIntFromInterval(50, 500);
    arrayBar.style.height = `${randomHeight}px`;

    arrayBar.style.width = `${width}px`;
    arrayBar.style.marginLeft = `${margin}px`;
    arrayBar.style.marginRight = `${margin}px`;

    const fontSize = width > 70 ? 20 : width > 60 ? 18 : width > 50 ? 16 : width > 40 ? 14 : width > 30 ? 12 : width > 20 ? 10 : 8;
    arrayBar.style.fontSize = `${fontSize}px`;

    arrayBar.style.color = color;

    arrayBar.textContent = randomHeight;

    arrayContainer.append(arrayBar);
  }
};

document.getElementById('generate-array').addEventListener('click', generateNewArray);
document.getElementById('array-size').addEventListener('input', generateNewArray);
document.getElementById('bubble-sort').addEventListener('click', bubbleSort);
document.getElementById('insertion-sort').addEventListener('click', insertionSort);
document.getElementById('merge-sort').addEventListener('click', mergeSort);
document.getElementById('quick-sort').addEventListener('click', quickSort);

generateNewArray();
