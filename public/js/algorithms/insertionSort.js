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
