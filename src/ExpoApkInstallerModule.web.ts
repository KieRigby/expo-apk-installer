import { registerWebModule, NativeModule } from 'expo';

import { ExpoApkInstallerModuleEvents } from './ExpoApkInstaller.types';

class ExpoApkInstallerModule extends NativeModule<ExpoApkInstallerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoApkInstallerModule);
