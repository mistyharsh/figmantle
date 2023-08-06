import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/rollup-out.js',
		format: 'esm'
	},
  plugins: [nodeResolve(), commonjs()],
};
