export interface MenuOptions{
  path: string;
  nameZh: string;
  component: any;
  icon: string;
  children: Array<MenuOptions>;
}
