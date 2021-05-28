import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes';
import { singleton } from './singleton';

let app = null;
let router = null;

function render(props) {
  const { container = document } = props;

  app = createApp(App);
  router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? '/dashboard/vue/' : '/',
    ),
    routes,
  });

  app.use(router);
  app.mount(container.querySelector('.mf-vue-container'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  singleton.setGlobalState = props.setGlobalState;
  singleton.onGlobalStateChange = props.onGlobalStateChange;
  props.onGlobalStateChange((state, prev) => {
    console.log(state, prev);
  });
  render(props);
}
export async function unmount() {
  app.unmount();
  app = null;
  router = null;
}
