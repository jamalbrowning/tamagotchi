import utils from '../helpers/utils';

const action = (name, score, scoreName, icon1, icon2, privateClass) => {
  const domString = `
    <div class = 'header'><h1>${(name.toUpperCase())}</h1></div>
    <div class = '${privateClass}'><h1>${scoreName}</h1><h2>${score}</h2></div>
    <div>
      <button>${icon1}</button>
      <button>${icon2}</button>
    </div>
  `;
  utils.printToDom(`#${name}`, domString);
};

export default { action };
