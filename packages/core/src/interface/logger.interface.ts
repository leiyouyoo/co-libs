import { Injectable, InjectionToken } from '@angular/core';
import { CoConfigManager } from '@co/core';

/**
 * 日志记录器
 */
export interface ILogger {
  /**
   * 记录信息
   *
   * @param message 消息
   */
  info(message: string): void;

  /**
   * 记录警告
   *
   * @param message 警告消息
   */
  warn(message: string): void;

  /**
   * 记录错误消息
   *
   * @param message 消息
   * @param exception 异常
   */
  error(message: string, exception: any): void;
}

export const CO_LOGGER_TOKEN = new InjectionToken<ILogger>('coLoggerToken', {
  providedIn: 'root',
  factory: CO_LOGGER_TOKEN_FACTORY,
});

export function CO_LOGGER_TOKEN_FACTORY() {
  return new CoLoggerFake();
}

@Injectable({ providedIn: 'root' })
export class CoLoggerFake implements ILogger {
  /**
   * 记录信息
   *
   * @param message 消息
   */
  info(message: string): void {
    if (CoConfigManager.getValue('debug')) {
      console.log(message);
    }
  }

  /**
   * 记录警告
   *
   * @param message 警告消息
   */
  warn(message: string): void {
    if (CoConfigManager.getValue('debug')) {
      console.warn(message);
    }
  }

  /**
   * 记录错误消息
   *
   * @param message 消息
   * @param exception 异常
   */
  error(message: string, exception: any): void {
    if (CoConfigManager.getValue('debug')) {
      console.error(message);
    }
  }
}
