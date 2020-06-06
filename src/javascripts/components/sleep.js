import '../../styles/_sleep.scss';
import sleep from './quadFunc';

const createSleep = () => {
  sleep.action('sleep', 50, 'Energy', '<h2>Nap</h2><i class="fas fa-bed"></i>', '<h2>deep slumber</h2><i class="far fa-dizzy"></i>', 'strength');
};


export default { createSleep };
