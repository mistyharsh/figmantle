import { Container, SVG } from '@svgdotjs/svg.js';

import { Component, Group, Node, Vector } from './types/Node';
import { precise } from './util';


export function renderNode(data: Node, root: Container): Container {
  switch (data.type) {
    case 'VECTOR':
      return renderVector(data, root);
    case 'GROUP':
      return renderGroup(data, root)
    default:
      break;
  }

  throw `not implemented ${data.type}`;
}


export function renderVector(data: Vector, container: Container) {

  data.fillGeometry?.map((p) => {
    container.path(p.path);
  });

  return container;
}


export function renderGroup(data: Group, parent: Container) {

  const g = parent.group();

  console.log(data.size);

  if (data.size) {
    g.width(precise(data.size.x));
    g.height(precise(data.size.y));
  }

  data.children.forEach((c) => renderNode(c, g));

  g.addTo(parent);

  return g;
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
