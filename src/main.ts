import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/dist/index.css';
import router from './router';
import store from './store';
import { loadAllPlugins } from './plugins';
import { setupI18n } from '@/locales';
import { registerGlobComp } from '@/components';
import svgLoader from './plugins/svgIcon/svg-loader';

(async() =>{
  const app = createApp(App);
  app.use(svgLoader, {
    imports: []
  });
  // Multilingual configuration
  setupI18n(app);
  // Load plugins
  loadAllPlugins(app);
  // Register global components
  registerGlobComp(app);
  // router ready https://next.router.vuejs.org/api/#isready
  app.use(router);
  await router.isReady();
  app.use(store).mount('#app');
})();

