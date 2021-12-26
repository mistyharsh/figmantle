import { SVG } from '@svgdotjs/svg.js';

import { renderVector, renderComponent } from '../Figma/render';

// All the example components
import { component1 } from './component1';
import component2 from './component2.json';
import { vector1 } from './vendor.sample';


export function renderVectors(parent: HTMLElement) {

  const svg1 = SVG();
  renderVector(vector1, svg1);

  svg1.addTo(parent);
}


export function renderComponents(parent: HTMLElement) {
  const svg1 = renderComponent(component1);
  const svg2 = renderComponent(component2 as any);

  svg1.addTo(parent);
  svg2.addTo(parent);
}
