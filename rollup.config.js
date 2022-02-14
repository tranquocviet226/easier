import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json');

export default {
  input: 'src/components/index.js', // All of your library files will be named exports from here
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  // All the used libs needs to be here
  external: [
    'react',
    'react-proptypes'
  ],
  plugins: [
    // This prevents needing an additional `external` prop in this config file by automaticall excluding peer dependencies
    external(),
    // Do Babel transpilation
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    // "...locates modules using the Node resolution algorithm"
    resolve(),
    commonjs(),
    postcss(),
  ],
}