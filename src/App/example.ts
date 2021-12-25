import { SVG } from '@svgdotjs/svg.js';

import { renderVector, renderComponent } from '../Figma/render/render';

// All the example components
import { component1 } from '../Figma/render/component.sample';
import { vector1 } from '../Figma/render/vendor.sample';


export function renderVectors(parent: HTMLElement) {

  const svg1 = SVG();
  renderVector(vector1, svg1);

  svg1.addTo(parent);
}


export function renderComponents(parent: HTMLElement) {
  const svg1 = renderComponent(component1);

  svg1.addTo(parent);
}
