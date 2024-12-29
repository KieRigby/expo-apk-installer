import { NativeModule, requireNativeModule } from 'expo';

import { ExpoApkInstallerModuleEvents } from './ExpoApkInstaller.types';

declare class ExpoApkInstallerModule extends NativeModule<ExpoApkInstallerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoApkInstallerModule>('ExpoApkInstaller');
