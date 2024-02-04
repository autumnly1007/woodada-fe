/**
 * 메뉴 데이터
 */
export interface IMenus {
  main: IMenu[]; // 메인 메뉴
  sub: IMenu[]; // 서브 메뉴
}

/**
 * 메뉴
 */
export interface IMenu {
  icon?: string; // 메뉴 아이콘
  label: string; // 메뉴 라벨
  path: string; // 경로
  page?: string[]; // 출력 페이지
}
