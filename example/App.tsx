import * as ExpoApkInstaller from "expo-apk-installer";
import * as FileSystem from "expo-file-system";
import { Button, View } from "react-native";

export default function App() {
  const downloadApk = async (url: string) => {
    console.log("Starting APK download from:", url);

    const downloadResumable = FileSystem.createDownloadResumable(
      url,
      FileSystem.cacheDirectory + "update.apk"
    );

    try {
      const result = await downloadResumable.downloadAsync();
      console.log("Finished downloading to ", result?.uri);
      return result?.uri;
    } catch (error) {
      console.error("Error downloading APK:", error);
      return null;
    }
  };

  const handleInstall = async () => {
    try {
      const uri = await downloadApk(
        "https://github.com/circulosmeos/triops.apk/releases/download/v1.6/triops.apk"
      );

      if (!uri)
        throw new Error("APK download failed. Check the logs for more info.");

      await ExpoApkInstaller.install(uri);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Download & Install" onPress={handleInstall} />
    </View>
  );
}
