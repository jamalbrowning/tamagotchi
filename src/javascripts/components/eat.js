import utils from '../helpers/utils';
import '../../styles/_eat.scss';

const createEat = () => {
  let domString = '';

  domString += '<h1>eat</h1>';
  utils.printToDom('#eat', domString);
};

export default { createEat };
