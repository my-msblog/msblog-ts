import { module } from './module';
export default {
  message: {
    language: 'English',
    successful_logout: 'Successful logout',
  },
  pages: {
    ...module.pages.en,
  },
  bar: {
    title: 'MS BLOG',
    categories: 'Categories',
    homepage: 'Homepage',
    tags: 'Tags',
    archives: 'Archives',
    about: 'About',
    links: 'Links',
    login: 'Sign In',
    change_password: 'Change password',
    personal_center: 'Personal center',
  },
  router: {
    ...module.route.en,
  },
  sex: {
    male: 'Male',
    female: 'Female'
  },
  role: {
    ...module.role.en,
  }
};
