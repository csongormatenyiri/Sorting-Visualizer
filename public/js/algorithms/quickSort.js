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
