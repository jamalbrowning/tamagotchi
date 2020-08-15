import utils from '../helpers/utils';
import '../../styles/_fight.scss';
import fight from './quadFunc';

let strength = 100;
const incrementStrength = 1;
const decrementStrength = -10;


const creatFight = () => {
  fight.action('fight', strength, 'Strength Points', '<h2>Run Away Bravely</h2><i class="fas fa-running"></i>', '<h2>Commiting Violence</h2><i class="fas fa-skiing"></i>', 'strength', 'run', 'commit');
};

// increment and decrement
const incrementSp = () => {
  console.error('this works');
  if (strength > 99) {
    strength = 100;
  } else {
    strength += incrementStrength;
  }

  utils.printToDom('.strength h2', strength);
};

const decrementSp = () => {
  console.error('this works');
  // strength += decrementStrength;
  if (strength < 1) {
    strength = 0;
  } else {
    strength += decrementStrength;
  }

  utils.printToDom('.strength h2', strength);
};

// button Listeners
const buttonListeners = () => {
  $('#run').click(incrementSp);
  $('#commit').click(decrementSp);
};
export default {
  creatFight,
  buttonListeners,
};
