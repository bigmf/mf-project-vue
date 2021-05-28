import Welcome from './pages/Welcome';
import Other from './pages/Other';

const routes = [
  { path: '/welcome', component: Welcome },
  { path: '/other', component: Other },
  { path: '/', redirect: '/welcome' },
];

export default routes;
