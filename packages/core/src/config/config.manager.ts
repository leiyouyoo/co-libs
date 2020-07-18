
import _ from 'lodash'

declare var window;

const CONFIG_NAME = "CO_PLATFORM";

/**
 * 配置管理器
 */
export class CoConfigManager {


  /**
   * 
   * @param name 获取配置节
   */
  static getSection(name: string) {
    return _.get(window[CONFIG_NAME], name)
  }

  /**
  * 
  * @param name 获取配置值
  */
  static getValue(name: string): any {
    return _.get(window[CONFIG_NAME], name)
  }
}
