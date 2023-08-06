import { add, cwd } from '@bundle/dep-cjs';
import { subtract } from '@bundle/dep-esm';

export function app() {
  console.log('App function');
  console.log('Addition:', add(2, 3));
  console.log('Substration:', subtract(10, 5));
}

function main() {
  app();
  cwd();
  console.log('Main function');
}

// Side effect
main();
