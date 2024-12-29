import * as React from 'react';

import { ExpoApkInstallerViewProps } from './ExpoApkInstaller.types';

export default function ExpoApkInstallerView(props: ExpoApkInstallerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
