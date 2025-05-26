import { getFlamesResult } from './flamesLogic.js';

window.calculate = function () {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  const result = getFlamesResult(name1, name2);
  document.getElementById('result').innerText = `Result: ${result}`;
}