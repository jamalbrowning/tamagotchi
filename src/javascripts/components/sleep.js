import '../../styles/_sleep.scss';
import sleep from './quadFunc';
import utils from '../helpers/utils';

let restness = 50;
const incrementNap = 50;
const incrementSlumber = 60;

const createSleep = () => {
  sleep.action('sleep', restness, 'Energy', '<h2>Nap</h2><i class="fas fa-bed"></i>', '<h2>deep slumber</h2><i class="far fa-dizzy"></i>', 'energy', 'nap', 'slumber');
};

// increment
const incrementEnergyNap = () => {
  if (restness > 99) {
    restness = 100;
  } else {
    restness += incrementNap;
  }

  utils.printToDom('.energy h2', restness);
};
const incrementEnergySlumber = () => {
  if (restness > 99) {
    restness = 100;
  } else {
    restness += incrementSlumber;
  }

  utils.printToDom('.energy h2', restness);
};

// button listeners
const buttonListeners = () => {
  $('#nap').click(incrementEnergyNap);
  $('#slumber').click(incrementEnergySlumber);
};

export default {
  createSleep,
  buttonListeners,
};
