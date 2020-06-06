import utils from '../helpers/utils';
import '../../styles/_fight.scss';

const creatFight = () => {
  let domString = '';
  domString += '<h1>fight</h1>';
  utils.printToDom('#fight', domString);
};

export default { creatFight };
