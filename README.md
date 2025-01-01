# expo-apk-installer

Install APK files on android.

You must add the following into your `app.json` file to ensure the correct permissions and file providers are added to your android project:
```json
{
    "expo": {
        "plugins": [
            "expo-apk-installer"
        ],
        ...
    }
}
```

Ensure the APK file to install is in the cache directory for your application. Here is some example code to download an apk from a URL using expo:

```js
import * as ApkInstaller from "expo-apk-installer";
import * as FileSystem from "expo-file-system";

const downloadAndInstallApk = async (url: string) => {
    const downloadResumable = FileSystem.createDownloadResumable(
      url,
      FileSystem.cacheDirectory + "update.apk"
    );

    try {
      const result = await downloadResumable.downloadAsync();
      ApkInstaller.install (result?.uri);
    } catch (error) {
      console.error("Error downloading APK:", error);
    }
  };
```

# API documentation

- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/apk-installer/)
- [Documentation for the main branch](https://docs.expo.dev/versions/unversioned/sdk/apk-installer/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-apk-installer
```

### Configure for Android





# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
