/**
 * 日志记录器
 */
export interface Logger {
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
