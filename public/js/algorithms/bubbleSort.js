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
