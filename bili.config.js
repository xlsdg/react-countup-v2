'use strict';

module.exports = {
  input: 'src/index.jsx',
  outDir: 'dist',
  // config: '',
  format: ['cjs', 'umd', 'umd-min', 'es'],
  moduleName: 'ReactCountUp',
  global: {
    'react': 'React',
    'countup.js': 'CountUp'
  },
  filename: '[name][suffix].js',
  name: 'ReactCountUp',
  // inline: false,
  // cwd: '',
  // external: [
  //   'react',
  //   'countup.js'
  // ],
  banner: false,
  postcss: {
    modules: true
  },
  js: 'babel',
  // plugin: ['vue'],
  target: 'browser',
  jsx: 'react',
  // objectAssign: undefined,
  // exports: 'auto',
  // replace: {},
  // alias: {},
  pretty: true
  // env: {},
  // virtualModules: {},
  // sizeLimit: {},
  // extendOptions: {},
};
