import utils from '../helpers/utils';
import '../../styles/_play.scss';

const createPlay = () => {
  let domString = '';

  domString += '<h1>play</h1>';
  utils.printToDom('#play', domString);
};

export default { createPlay };
