import { renderVectors } from './App/example';

import './style.css'


function main() {
  const appElm = document.querySelector<HTMLDivElement>('#app')!;

  renderVectors(appElm);
}


window.addEventListener('DOMContentLoaded', main);
