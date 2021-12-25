import { render as renderVector } from '../Figma/render/vector';

import { vector1 } from '../Figma/render/vendor.sample';


export function renderVectors(parent: HTMLElement) {
  const vectorSvg1 = renderVector(vector1);


  console.log(vectorSvg1, parent);

  vectorSvg1.addTo(parent);

  // parent.appendChild(vectorSvg1.node);
}
