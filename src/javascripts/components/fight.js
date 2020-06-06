import '../../styles/_fight.scss';
import fight from './quadFunc';

const creatFight = () => {
  fight.action('fight', 100, 'Strength Points', '<h2>Run Away Bravely</h2><i class="fas fa-running"></i>', '<h2>Commiting Violence</h2><i class="fas fa-skiing"></i>', 'strength');
};

export default { creatFight };
