import typescriptResolve from 'rollup-plugin-typescript2';
import typescript from 'typescript';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [
  typescriptResolve({ typescript, rollupCommonJSResolveHack: true }),
  commonjs({
    sourceMap: true,
    extensions: ['.js', '.ts'],
    dedupe: ['class-validator', 'class-transformer']
  })
];

export default {
  external: ['class-validator', 'class-transformer'],
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins
};