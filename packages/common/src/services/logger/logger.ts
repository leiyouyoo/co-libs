import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ILogger } from '@co/core';


@Injectable({ providedIn: 'root' })
export class CoLogger implements ILogger {

  /**
   * 记录信息
   *
   * @param message 消息
   */
  info(message: string): void {
    console.info(message);
  }

  /**
   * 记录警告
   *
   * @param message 警告消息
   */
  warn(message: string): void {
    console.warn(message);
  }

  /**
   * 记录错误消息
   *
   * @param message 消息
   * @param exception 异常
   */
  error(message: string, exception: any): void {
    console.error(message);
  }
}
