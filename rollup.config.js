import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

export default {
  input: packageJson.exports.require,
  output: [
    {
      file: packageJson.exports.default,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    json(),
  ],
};
