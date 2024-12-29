import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoApkInstallerViewProps } from './ExpoApkInstaller.types';

const NativeView: React.ComponentType<ExpoApkInstallerViewProps> =
  requireNativeView('ExpoApkInstaller');

export default function ExpoApkInstallerView(props: ExpoApkInstallerViewProps) {
  return <NativeView {...props} />;
}
