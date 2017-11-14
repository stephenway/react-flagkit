'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const pkg = require('./package.json');

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(['dist/*', '!dist/img']));

// Compile source code into a distributable format with Babel
['es', 'cjs', 'umd'].forEach((format) => {
  promise = promise.then(() => rollup.rollup({
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [babel(Object.assign(pkg.babel, {
      babelrc: false,
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: pkg.babel.presets.map((x) => (x === 'latest' ? ['latest', {es2015: {modules: false}}] : x)),
    })),
      resolve(),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': ['PureComponent', 'createElement'],
        },
      }),
    ],
  }).then((bundle) => bundle.write({
    file: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
    format,
    name: format === 'umd' ? pkg.name : undefined,
    globals: {
      'prop-types': 'PropTypes',
      'react': 'React',
      'styled-components': 'styled',
      '@navis/mdc-animation': 'mdcAnimation',
      '@navis/mdc-list': 'mdcList',
      '@navis/mdc-elevation': 'mdcElevation',
      '@navis/mdc-theme': 'mdcTheme',
      '@navis/mdc-typography': 'mdcTypography',
      '@navis/mdc-list/list': 'mdcListList',
      '@navis/mdc-list/listItem': 'mdcListItem',
      '@navis/mdc-list/listGroup': 'mdcListGroup',
      '@navis/mdc-list/listDivider': 'mdcListDivider',
      '@navis/mdc-list/listItemStartDetail': 'mdcListStart',
    },
    sourcemap: true,
    exports: 'named',
  })));
});

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
});

promise.catch((err) => console.error(err.stack)); // eslint-disable-line no-console
