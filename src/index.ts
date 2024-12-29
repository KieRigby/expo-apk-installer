// Reexport the native module. On web, it will be resolved to ExpoApkInstallerModule.web.ts
// and on native platforms to ExpoApkInstallerModule.ts
export { default } from './ExpoApkInstallerModule';
export { default as ExpoApkInstallerView } from './ExpoApkInstallerView';
export * from  './ExpoApkInstaller.types';
