(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { enableButtons, disableButtons, sleep, getDelay, BLUE, GREEN, RED, PURPLE } = require('../utils/utils');

const bubbleSort = async () => {
  disableButtons();
  const bubbleSortButton = document.getElementById('bubble-sort');
  bubbleSortButton.classList.remove('algorithm-button');
  bubbleSortButton.classList.add('current-algorithm-button');

  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = BLUE;
  }

  for (let i = 0; i < arrayBars.length; i++) {
    for (let j = 0; j < arrayBars.length - i - 1; j++) {
      arrayBars[j].style.backgroundColor = GREEN;
      arrayBars[j + 1].style.backgroundColor = GREEN;

      await sleep(getDelay());

      if (parseInt(arrayBars[j].style.height) > parseInt(arrayBars[j + 1].style.height)) {
        arrayBars[j].style.backgroundColor = RED;
        arrayBars[j + 1].style.backgroundColor = RED;

        await sleep(getDelay());

        // Swap the values & heights
        const tempText = arrayBars[j].textContent;
        arrayBars[j].textContent = arrayBars[j + 1].textContent;
        arrayBars[j + 1].textContent = tempText;

        const tempHeight = arrayBars[j].style.height;
        arrayBars[j].style.height = arrayBars[j + 1].style.height;
        arrayBars[j + 1].style.height = tempHeight;

        await sleep(getDelay());

        arrayBars[j].style.backgroundColor = GREEN;
        arrayBars[j + 1].style.backgroundColor = GREEN;

        await sleep(getDelay());

        arrayBars[j].style.backgroundColor = BLUE;
        arrayBars[j + 1].style.backgroundColor = BLUE;
      } else {
        arrayBars[j].style.backgroundColor = BLUE;
        arrayBars[j + 1].style.backgroundColor = BLUE;
      }
    }
    arrayBars[arrayBars.length - i - 1].style.backgroundColor = PURPLE;
  }
  enableButtons();
  bubbleSortButton.classList.remove('current-algorithm-button');
  bubbleSortButton.classList.add('algorithm-button');
};

module.exports = bubbleSort;

},{"../utils/utils":6}],2:[function(require,module,exports){
const { enableButtons, disableButtons, sleep, getDelay, BLUE, GREEN, RED, ORANGE, YELLOW, PURPLE } = require('../utils/utils');

const insertionSort = async () => {
  disableButtons();
  const insertionSortButton = document.getElementById('insertion-sort');
  insertionSortButton.classList.remove('algorithm-button');
  insertionSortButton.classList.add('current-algorithm-button');

  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = BLUE;
  }

  arrayBars[0].style.backgroundColor = ORANGE;
  for (let i = 1; i < arrayBars.length; i++) {
    const key = parseInt(arrayBars[i].style.height);
    arrayBars[i].style.backgroundColor = YELLOW;
    await sleep(getDelay());

    if (parseInt(arrayBars[i - 1].style.height) > key) {
      arrayBars[i].style.backgroundColor = RED;
      await sleep(getDelay());
    }

    let j = i - 1;
    while (j >= 0 && parseInt(arrayBars[j].style.height) > key) {
      arrayBars[j + 1].style.height = arrayBars[j].style.height;
      arrayBars[j + 1].textContent = arrayBars[j].textContent;
      arrayBars[j + 1].style.backgroundColor = ORANGE;

      arrayBars[j].style.height = `${key}px`;
      arrayBars[j].textContent = `${key}`;
      arrayBars[j].style.backgroundColor = RED;
      await sleep(getDelay());

      j--;
    }
    arrayBars[j + 1].style.height = `${key}px`;
    arrayBars[j + 1].textContent = `${key}`;
    arrayBars[j + 1].style.backgroundColor = GREEN;
    await sleep(getDelay());
    arrayBars[j + 1].style.backgroundColor = ORANGE;
  }

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = PURPLE;
  }
  enableButtons();
  insertionSortButton.classList.remove('current-algorithm-button');
  insertionSortButton.classList.add('algorithm-button');
};

module.exports = insertionSort;

},{"../utils/utils":6}],3:[function(require,module,exports){
const { enableButtons, disableButtons, sleep, getDelay, BLUE, GREEN, ORANGE, YELLOW, PURPLE } = require('../utils/utils');

const mergeSortHelper = async (arrayBars, left, right) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    await mergeSortHelper(arrayBars, left, mid);
    await mergeSortHelper(arrayBars, mid + 1, right);

    // animate first half and second half
    for (let t = left; t <= mid; t++) {
      arrayBars[t].style.backgroundColor = ORANGE;
      await sleep(getDelay());
    }
    for (let t = mid + 1; t <= right; t++) {
      arrayBars[t].style.backgroundColor = YELLOW;
      await sleep(getDelay());
    }

    // merge
    const tempArr = new Array(right - left + 1);
    let k = 0;

    let i = left;
    let j = mid + 1;
    while (i <= mid && j <= right) {
      if (parseInt(arrayBars[i].style.height) < parseInt(arrayBars[j].style.height)) {
        tempArr[k] = parseInt(arrayBars[i].style.height);
        i++;
      } else {
        tempArr[k] = parseInt(arrayBars[j].style.height);
        j++;
      }
      k++;
    }
    while (i <= mid) {
      tempArr[k] = parseInt(arrayBars[i].style.height);
      i++;
      k++;
    }
    while (j <= right) {
      tempArr[k] = parseInt(arrayBars[j].style.height);
      j++;
      k++;
    }
    for (let t = 0; t < tempArr.length; t++) {
      arrayBars[t + left].style.height = `${tempArr[t]}px`;
      arrayBars[t + left].textContent = `${tempArr[t]}`;
      arrayBars[t + left].style.backgroundColor = GREEN;
      await sleep(getDelay());
    }
    for (let t = left; t <= right; t++) {
      arrayBars[t].style.backgroundColor = BLUE;
    }
  }
};

const mergeSort = async () => {
  disableButtons();
  const mergeSortButton = document.getElementById('merge-sort');
  mergeSortButton.classList.remove('algorithm-button');
  mergeSortButton.classList.add('current-algorithm-button');

  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = BLUE;
  }

  await mergeSortHelper(arrayBars, 0, arrayBars.length - 1);

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = PURPLE;
  }
  enableButtons();
  mergeSortButton.classList.remove('current-algorithm-button');
  mergeSortButton.classList.add('algorithm-button');
};

module.exports = mergeSort;

},{"../utils/utils":6}],4:[function(require,module,exports){
const { enableButtons, disableButtons, sleep, getDelay, BLUE, GREEN, RED, PURPLE } = require('../utils/utils');

const partition = async (arrayBars, left, right) => {
  const pivot = parseInt(arrayBars[left].style.height);
  let i = left - 1;
  let j = right + 1;
  arrayBars[left].style.backgroundColor = GREEN;
  arrayBars[right].style.backgroundColor = GREEN;
  do {
    do {
      if (j !== right + 1 && i !== j) {
        arrayBars[j].style.backgroundColor = BLUE;
      }
      j--;
      arrayBars[j].style.backgroundColor = GREEN;
      await sleep(getDelay());
    } while (parseInt(arrayBars[j].style.height) > pivot);
    do {
      if (i !== left - 1 && i !== j) {
        arrayBars[i].style.backgroundColor = BLUE;
      }
      i++;
      arrayBars[i].style.backgroundColor = GREEN;
      await sleep(getDelay());
    } while (parseInt(arrayBars[i].style.height) < pivot);

    if (i < j) {
      arrayBars[i].style.backgroundColor = RED;
      arrayBars[j].style.backgroundColor = RED;
      await sleep(getDelay());

      // Swap the values & heights
      const tempText = arrayBars[i].textContent;
      arrayBars[i].textContent = arrayBars[j].textContent;
      arrayBars[j].textContent = tempText;

      const tempHeight = arrayBars[i].style.height;
      arrayBars[i].style.height = arrayBars[j].style.height;
      arrayBars[j].style.height = tempHeight;

      await sleep(getDelay());
      arrayBars[i].style.backgroundColor = GREEN;
      arrayBars[j].style.backgroundColor = GREEN;
    } else {
      arrayBars[i].style.backgroundColor = BLUE;
      arrayBars[j].style.backgroundColor = BLUE;
    }
  } while (i < j);
  return j;
};

const quickSortHelper = async (arrayBars, left, right) => {
  if (left < right) {
    const m = await partition(arrayBars, left, right);
    await quickSortHelper(arrayBars, left, m);
    await quickSortHelper(arrayBars, m + 1, right);
  }
};

const quickSort = async () => {
  disableButtons();
  const quickSortButton = document.getElementById('quick-sort');
  quickSortButton.classList.remove('algorithm-button');
  quickSortButton.classList.add('current-algorithm-button');

  const arrayBars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = BLUE;
  }

  await quickSortHelper(arrayBars, 0, arrayBars.length - 1);

  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = PURPLE;
  }
  enableButtons();
  quickSortButton.classList.remove('current-algorithm-button');
  quickSortButton.classList.add('algorithm-button');
};

module.exports = quickSort;

},{"../utils/utils":6}],5:[function(require,module,exports){
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

},{"./algorithms/bubbleSort":1,"./algorithms/insertionSort":2,"./algorithms/mergeSort":3,"./algorithms/quickSort":4,"./utils/utils":6}],6:[function(require,module,exports){
// colors
const BLUE = 'rgba(66, 134, 244, 0.8)';
const GREEN = 'rgba(78, 216, 96, 0.8)';
const RED = 'rgba(219, 57, 57, 0.8)';
const ORANGE = 'rgba(255, 165, 0, 0.8)';
const YELLOW = 'rgba(215, 215, 0, 0.8)';
const PURPLE = 'rgba(169, 92, 232, 0.8)';

// min and max included
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const enableButtons = () => {
  document.getElementById('generate-array').disabled = false;
  document.getElementById('array-size-text').style.color = 'white';
  document.getElementById('array-size').disabled = false;
  document.getElementById('merge-sort').disabled = false;
  document.getElementById('quick-sort').disabled = false;
  document.getElementById('insertion-sort').disabled = false;
  document.getElementById('bubble-sort').disabled = false;
};

const disableButtons = () => {
  document.getElementById('generate-array').disabled = true;
  document.getElementById('array-size-text').style.color = 'rgba(214, 29, 29, 0.8)';
  document.getElementById('array-size').disabled = true;
  document.getElementById('merge-sort').disabled = true;
  document.getElementById('quick-sort').disabled = true;
  document.getElementById('insertion-sort').disabled = true;
  document.getElementById('bubble-sort').disabled = true;
};

const getDelay = () => {
  const inputRange = document.getElementById('sorting-speed');
  return parseInt(inputRange.max) - parseInt(inputRange.value);
};

module.exports = { enableButtons, disableButtons, sleep, getDelay, randomIntFromInterval, BLUE, GREEN, RED, ORANGE, YELLOW, PURPLE };

},{}]},{},[5]);
