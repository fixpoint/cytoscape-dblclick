import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      name: 'cytoscapeExtensionSkeleton',
      global: {
        cytoscape: 'Cytoscape',
      },
    },
    {
      file: './dist/index.common.js',
      format: 'cjs',
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
    },
  ],
  external: ['cytoscape'],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext',
          moduleResolution: 'node',
        },
      },
    }),
  ],
};
