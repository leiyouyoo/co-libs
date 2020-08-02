import { CoConfigManager } from './config';

export function isDebug() {
  return CoConfigManager.getValue('debug');
}
