import Home from './index.vue';
import configPage from './configPage.vue';

const routers = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/config',
    name: 'config',
    component: configPage
  },
  {
    path: '/',
    component: Home
  }
];
export default routers
