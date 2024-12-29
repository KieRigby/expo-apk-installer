import { ConfigPlugin } from "expo/config-plugins";

const withFileProvider: ConfigPlugin = (config) => {
  console.log("my custom plugin");
  return config;
};

export default withFileProvider;
