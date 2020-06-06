import '../../styles/_eat.scss';
import eat from './quadFunc';
import utils from '../helpers/utils';

let fullness = 100;
const healthyFoods = 10;
const fattyFoods = -3;

const createEat = () => {
  eat.action('eat', fullness, 'Health', '<h2>Healthy</h2><i class="fas fa-apple-alt"></i>', '<h2>Unhealthy</h2><i class="fas fa-hamburger"></i>', 'full', 'healthy', 'unhealthy');
};

// increment and decrement
const incrementFullness = () => {
  if (fullness >= 100) {
    fullness = 100;
  } else {
    fullness += healthyFoods;
  }

  utils.printToDom('.full h2', fullness);
};

const decrementFullness = () => {
  if (fullness < 1) {
    fullness = 0;
  } else {
    fullness += fattyFoods;
  }

  utils.printToDom('.full h2', fullness);
};

// button listneers
const buttonListeners = () => {
  $('#healthy').click(incrementFullness);
  $('#unhealthy').click(decrementFullness);
};

export default {
  createEat,
  buttonListeners,
};
