import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import tailwindcss from "tailwindcss";

import tailwindConfig from "./tailwind.config.js";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
        plugins: [tailwindcss(tailwindConfig)],
      }),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  // {
  //   input: "src/index.css",
  //   output: [{ file: "dist/index.css", format: "es" }],
  //   plugins: [
  //     postcss({
  //       config: {
  //         path: "./postcss.config.cjs",
  //       },
  //       extensions: [".css"],
  //       minimize: true,
  //       inject: {
  //         insertAt: "top",
  //       },
  //       plugins: [tailwindcss(tailwindConfig)],
  //     }),
  //   ],
  // },
];
