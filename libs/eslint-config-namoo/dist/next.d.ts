declare module "eslint-config-namoo/next" {
  export declare type ConfigArray =
    import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigArray;

  const configs: ConfigArray;
  export = configs;
}
