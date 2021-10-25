import type { App } from 'vue';
import { customComp } from '@/components/register';

export function registerGlobComp(app: App)　{
  console.log(customComp);
  customComp.forEach(component => {
    app.component(component.name, component);
  });
}
