import { NativeModule, requireNativeModule } from "expo";

declare class ExpoApkInstallerModule extends NativeModule {
  install(uri: string): void;
}

export default requireNativeModule<ExpoApkInstallerModule>("ExpoApkInstaller");
