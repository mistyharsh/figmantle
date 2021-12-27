
export function precise(x: number, precision = 3) {
  return Number(x.toPrecision(precision));
}
