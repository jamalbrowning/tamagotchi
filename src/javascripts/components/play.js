import '../../styles/_play.scss';
import play from './quadFunc';
import utils from '../helpers/utils';

let fun = 50;
const incrementFunAlot = 50;
const incrementFunSome = 2;

const createPlay = () => {
  play.action('play', fun, 'Happiness', '<h2>Super Duper Fun</h2><i class="fas fa-baseball-ball"></i>', '<h2>SLightly Fun</h2><i class="fas fa-volleyball-ball"></i>', 'fun', 'super', 'slight');
};

// increment
const incrementFunSuper = () => {
  if (fun > 99) {
    fun = 100;
  } else {
    fun += incrementFunAlot;
  }
  utils.printToDom('.fun h2', fun);
};
const incrementFunSlightly = () => {
  if (fun > 99) {
    fun = 100;
  } else {
    fun += incrementFunSome;
  }
  utils.printToDom('.fun h2', fun);
};
const buttonListeners = () => {
  $('#super').click(incrementFunSuper);
  $('#slight').click(incrementFunSlightly);
};

export default {
  createPlay,
  buttonListeners,
};
