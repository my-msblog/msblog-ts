/* 加载插件文件 */
import type { App } from 'vue';
/**
 * @description 加载所有 Plugins
 * @param   app 整个应用的实例
 */
export function loadAllPlugins(app: App) {
  const files = require.context('.', true, /\.ts$/);
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') files(key).default(app);
    }
  });
}
