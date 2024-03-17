export interface MenuItemMeta {
  icon?: string
}
export interface MenuItem {
  name: string
  path: string
  meta?: MenuItemMeta
  children?: MenuItem[] | undefined
}

const routes: Array<MenuItem> = [
  {
    path: '/',
    name: '主页',
    meta: {
      icon: 'House',
    },
  },
  {
    path: '/1',
    name: '菜单一',
    children: [
      {
        path: '/1-1',
        name: '表格',
      },
      {
        path: '/1-2',
        name: '日历',
      },
      {
        path: '/1-3-1',
        name: '信息描述',
      },
    ],
  },

  {
    path: '/2',
    name: '菜单二',
    children: [
      {
        path: '/2-1',
        name: '抽屉',
      },
      {
        path: '/2-2',
        name: '弹出框',
      },
    ],
  },
  {
    path: '/3',
    name: '菜单三',
    children: [
      {
        path: '/3-1',
        name: '标签页',
      },
      {
        path: '/3-2',
        name: '时间线-漫游引导',
      },
    ],
  },
  {
    path: '/4',
    name: '菜单四',
    children: [
      {
        path: '/4-1',
        name: '加载',
      },
      {
        path: '/4-2',
        name: '水印指令',
      },
      {
        path: '/4-3',
        name: '打印',
      },
      {
        path: '/4-4',
        name: '打印图片',
      },
    ],
  },
  {
    path: '/5',
    name: '运营',
    children: [
      {
        path: '/5-1',
        name: '运单管理',
        children: [
          {
            path: '/5-1-1',
            name: '网点发出',
          },
          {
            path: '/5-1-2',
            name: '网点到达',
          },
        ],
      },
    ],
  },
  {
    path: '/6',
    name: '列表页',
    children: [
      {
        path: '/6-1',
        name: '数据列表',
      },
    ],
  },
  {
    path: '/7',
    name: '系统设置',
    children: [
      {
        path: '/7-1',
        name: '菜单设置',
      },
    ],
  },
]

export { routes }
