
let babel = require('rollup-plugin-babel');
let nodeResolve = require('rollup-plugin-node-resolve');
let commonJs = require('rollup-plugin-commonjs');

module.exports = {
  entry: 'src/app.js',
  dest: 'dist/bundle.js',
  format: 'umd',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    nodeResolve({
      main: true
    }),
    commonJs({
      include: 'node_modules/**'
    })
  ]
};
