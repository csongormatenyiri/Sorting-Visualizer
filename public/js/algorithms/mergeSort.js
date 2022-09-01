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
