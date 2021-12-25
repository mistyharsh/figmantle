import { Svg, SVG } from '@svgdotjs/svg.js';

import { Component, Node, Vector } from '../types/Node';
import { precise } from '../util';


export function renderNode(data: Node, root?: Svg): Svg | void {
  switch (data.type) {
    case 'VECTOR':
      return renderVector(data, root!);
    default:
      break;
  }
}


export function renderVector(data: Vector, svg: Svg) {

  data.fillGeometry?.map((p) => {
    svg.path(p.path);
  });

  return svg;
}



export function renderComponent(data: Component) {

  const svg = SVG();

  if (data.size) {
    svg.width(precise(data.size.x));
    svg.height(precise(data.size.y));
  }

  data.children.forEach((c) => renderNode(c, svg));

  return svg;
}
