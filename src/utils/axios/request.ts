import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';
import router from '@/router';
import { Delete, Get, Post, Put } from './type';
const use = store;
const service = axios.create({
  baseURL: '/api',
  timeout: 5 * 1000,
});

service.interceptors.request.use(
  config => {
    // 获取后端传来的token
    const token = use.getters.getToken;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.data = JSON.stringify(config.data);
    config.headers['token'] = token;
    return config;
  },
  error => {
    console.error('request error', error);
    return Promise.reject(error);
  },
);
service.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const data = response.data;
      if (data.code !== 200) {
        ElMessage({
          message: data.msg || 'error',
          type: 'error',
          duration: 2 * 1000,
        });
        if (data.code === 401) {
          store.commit('clearUser');
          //router.replace('/login').then();
        }
        return reject(data.msg || 'error');
      } else {
        return resolve(data);
      }
    });
  }, error => {
    const response = error.response;
    if (response === undefined || error.status === 404) {
      ElMessage({
        showClose: true,
        message: '服务器链接异常',
        type: 'error',
        duration: 2 * 1000,
      });
    } else {
      console.log(error);
    }
  }
);

const get: Get = async (opt ) => {
  const params = opt.params;
  const response = await service.get(opt.url, { params, ...opt.config });
  return response.data;
};
const post: Post = async (option ) => {
  const params = option.params;
  const res = await service.post(option.url, { params, ...option.config });
  return res.data;
};
const put: Put = async (option ) => {
  const params = option.params;
  const res = await service.post(option.url, { params, ...option.config });
  return res.data;
};
const deleteRequest: Delete = async (option ) => {
  const params = option.params;
  const res = await service.post(option.url, { params, ...option.config });
  return res.data;
};

const request = { get, post, put, deleteRequest };

export default request;
