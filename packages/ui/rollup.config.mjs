import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import esbuild from 'rollup-plugin-esbuild'
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const outputOptions = {
  preserveModules: true,
  preserveModulesRoot: 'src',
  exports: 'named',
}

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  esbuild({
    sourceMap: false,
  })
]

export default [
    {
      input: 'src/index.ts',
      plugins,
      external: [/node_modules/],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          entryFileNames: '[name].mjs',
          ...outputOptions
        },
        {
          dir: 'dist',
          format: 'cjs',
          ...outputOptions
        },
      ],
    },
    {
      input: 'src/index.ts',
      plugins: [
        dts(),
      ],
      output: [
        {
          file: `dist/index.d.ts`,
          format: 'esm',
        },
      ],
    },
  ]

