import { Path, SVG } from '@svgdotjs/svg.js';
import { Vector } from '../types/Node';


export function $f() {
  return document.createDocumentFragment();
}


export function $(elm: string) {
  return document.createElement(elm);
}


export function render(data: Vector) {

  const fragment = $f();

  const svg = SVG();

  data.fillGeometry?.map((p) => {
    // const path = new Path();

    // path.plot(p.path);

    svg.path(p.path);

    // path.addTo(fragment);

    // return path;
  });

  return svg;
}
