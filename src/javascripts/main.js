import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import progress from './components/progress';
import '../styles/main.scss';

const init = () => {
  play.createPlay();
  play.buttonListeners();
  eat.createEat();
  eat.buttonListeners();
  fight.creatFight();
  fight.buttonListeners();
  sleep.createSleep();
  sleep.buttonListeners();
  progress.healthStatus();
};

init();
