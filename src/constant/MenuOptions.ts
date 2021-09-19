export interface MenuOptions{
  path: string;
  nameZh: string;
  component: string;
  icon: string;
  children: Array<MenuOptions>;
}
