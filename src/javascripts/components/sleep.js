import utils from '../helpers/utils';
import '../../styles/_sleep.scss';

const createSleep = () => {
  let domString = '';
  domString += '<h1>sleep</h1>';
  utils.printToDom('#sleep', domString);
};

export default { createSleep };
