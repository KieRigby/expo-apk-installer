import {
  ConfigPlugin,
  withAndroidManifest,
  withDangerousMod,
} from "expo/config-plugins";

const fs = require("fs");
const path = require("path");

const withFileProvider: ConfigPlugin = (config) => {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    const provider = {
      $: {
        "android:name": "androidx.core.content.FileProvider",
        "android:authorities": "${applicationId}.provider",
        "android:exported": "false",
        "android:grantUriPermissions": "true",
      },
      "meta-data": [
        {
          $: {
            "android:name": "android.support.FILE_PROVIDER_PATHS",
            "android:resource": "@xml/file_paths",
          },
        },
      ],
    };

    const usesPermission = {
      $: {
        "android:name": "android.permission.REQUEST_INSTALL_PACKAGES",
      },
    };

    const manifest = androidManifest.manifest;

    if (!manifest["uses-permission"]) {
      manifest["uses-permission"] = [];
    }

    manifest["uses-permission"].push(usesPermission);

    const application: any = androidManifest.manifest.application?.[0];

    if (!application["provider"]) {
      application["provider"] = [];
    }

    application["provider"].push(provider);

    return config;
  });
};

const withFilePathsXML: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    "android",
    async (config) => {
      const filePath = path.join(
        config.modRequest.platformProjectRoot,
        "app/src/main/res/xml/file_paths.xml"
      );
      const filePathsXmlContent = `<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <cache-path name="cache" path="." />
</paths>
`;

      const directory = path.dirname(filePath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      fs.writeFileSync(filePath, filePathsXmlContent, "utf8");

      return config;
    },
  ]);
};

const withCustomFileProvider: ConfigPlugin = (config) => {
  config = withFileProvider(config);
  config = withFilePathsXML(config);
  return config;
};

module.exports = withCustomFileProvider;
