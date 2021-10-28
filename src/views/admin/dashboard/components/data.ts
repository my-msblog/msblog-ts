export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '访问数',
    icon: 'visit',
    value: 2000,
    total: 120000,
    color: '',
    action: '月',
  },
  {
    title: '成交额',
    icon: 'visit',
    value: 20000,
    total: 500000,
    color: 'success',
    action: '月',
  },
  {
    title: '下载数',
    icon: 'visit',
    value: 8000,
    total: 120000,
    color: 'warning',
    action: '周',
  },
  {
    title: '成交数',
    icon: 'visit',
    value: 5000,
    total: 50000,
    color: 'danger',
    action: '年',
  },
];

