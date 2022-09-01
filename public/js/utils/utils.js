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
