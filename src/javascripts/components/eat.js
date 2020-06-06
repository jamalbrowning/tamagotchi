import '../../styles/_eat.scss';
import eat from './quadFunc';

const createEat = () => {
  eat.action('eat', 100, 'Health', '<h2>Healthy</h2><i class="fas fa-apple-alt"></i>', '<h2>Unhealthy</h2><i class="fas fa-hamburger"></i>', 'full');
};

export default { createEat };
