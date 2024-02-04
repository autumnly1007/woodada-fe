import { IMenus } from '@/interfaces/menu.interface';

/**
 * 메뉴 데이터
 */
const menus: IMenus = {
  main: [
    {
      icon: 'my-diary',
      label: '나의 다이어리',
      path: '/my-diary',
      page: ['/my-diary', '/my-page'],
    },
    {
      label: '기능 미정1',
      path: '/my-diary',
      page: ['/my-diary', '/my-page'],
    },
    {
      label: '기능 미정2',
      path: '/my-diary',
      page: ['/my-diary', '/my-page'],
    },
  ],
  sub: [
    {
      label: '회원가입',
      path: '/signup',
      page: ['/'],
    },
    {
      label: '로그인',
      path: '/login',
      page: ['/'],
    },
    {
      label: '마이페이지',
      path: '/my-page',
      page: ['/my-diary', '/my-page'],
    },
    {
      label: '로그아웃',
      path: '/logout',
      page: ['/my-diary', '/my-page'],
    },
  ],
};

export default menus;
