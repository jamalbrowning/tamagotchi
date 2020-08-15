import utils from '../helpers/utils';

const action = (name, score, scoreName, icon1, icon2, privateClass, buttonName1, buttonName2) => {
  const domString = `
    <div class = 'header'><h1>${(name.toUpperCase())}</h1></div>
    <div class = '${privateClass}'><h1>${scoreName}</h1><h2>${score}</h2></div>
    <div>
      <button id = '${buttonName1}'>${icon1}</button>
      <button id = '${buttonName2}'>${icon2}</button>
    </div>
  `;
  utils.printToDom(`#${name}`, domString);
};

export default { action };
