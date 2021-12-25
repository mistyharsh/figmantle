import { renderComponents, renderVectors } from './App/example';

import './style.css'


function main() {
  const appElm = document.querySelector<HTMLDivElement>('#app')!;

  renderVectors(appElm);
  renderComponents(appElm);
}


window.addEventListener('DOMContentLoaded', main);
