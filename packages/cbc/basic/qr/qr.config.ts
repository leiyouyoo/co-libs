import { CoQRConfig } from '@co/core';

export const QR_DEFULAT_CONFIG: CoQRConfig = {
  lib: `https://cdn.bootcdn.net/ajax/libs/qrious/4.0.2/qrious.min.js`,
  background: 'white',
  backgroundAlpha: 1,
  foreground: 'black',
  foregroundAlpha: 1,
  level: 'L',
  mime: 'image/png',
  padding: 10,
  size: 220,
  delay: 0,
};
