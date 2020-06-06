import '../../styles/_play.scss';
import play from './quadFunc';

const createPlay = () => {
  play.action('play', 50, 'Happiness', '<h2>Super Duper Fun</h2><i class="fas fa-baseball-ball"></i>', '<h2>SLightly Fun</h2><i class="fas fa-volleyball-ball"></i>', 'fun');
};

export default { createPlay };
