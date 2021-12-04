import Home from '@/views/client/home/index.vue';
import ClientLayout from '@/layout/client/index.vue';
import Page404 from '@/views/page/404/index.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ClientLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/tags',
        name: 'Tags',
        component: () => import('@/views/client/tage/index.vue'),
      },
      {
        path: '/links',
        name: 'Links',
        component: () => import('@/views/client/links/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/client/about/index.vue'),
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('@/views/client/categories/index.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/client/login/index.vue'),
      },
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import('@/views/client/info/index.vue'),
      },
      {
        path: '/archive',
        name: 'archive',
        component: () => import('@/views/client/archive/index.vue'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/layout/admin/index.vue'),
    redirect: '/admin/dashboard',
    meta: {
      requireAuth: true,
      title: 'dashboard',
      tag: 'dashboard',
    },
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/index.vue'),
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Page404,
  }
];
