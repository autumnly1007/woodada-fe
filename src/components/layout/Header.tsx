'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';
import { styled } from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { Button } from '../ui/Button';
import { theme } from '@/styles/theme';
import menus from '@/datas/menu.data';

/**
 * 헤더 컴포넌트
 */
const Header: FC = () => {
  const router = useRouter();
  const path = usePathname() || '';

  return (
    <Container>
      <MainContents>
        <Link href={'/'}>
          <Image src={'/static/images/logo.png'} alt={'logo'} width={141} height={49} />
        </Link>
        <MainMenus>
          {/* 메인 메뉴 */}
          {menus.main.map((menu, index) => (
            <Fragment key={index}>
              {menu.page && menu.page.length > 0 ? (
                menu.page.includes(path) && (
                  <MenuWrapper key={index}>
                    <Button
                      text={menu.label}
                      onClick={() => router.push(menu.path)}
                      theme={ButtonTheme.TEXT}
                      padding={'28px 20px'}
                    >
                      {menu.icon && (
                        <Image
                          src={`/static/images/${menu.icon}.png`}
                          alt={menu.label}
                          width={20}
                          height={17}
                        />
                      )}
                    </Button>
                  </MenuWrapper>
                )
              ) : (
                <MenuWrapper key={index}>
                  <Button
                    text={menu.label}
                    onClick={() => router.push(menu.path)}
                    theme={ButtonTheme.TEXT}
                    padding={'28px 20px'}
                  >
                    {menu.icon && (
                      <Image
                        src={`/static/images/${menu.icon}.png`}
                        alt={menu.label}
                        width={20}
                        height={17}
                      />
                    )}
                  </Button>
                </MenuWrapper>
              )}
            </Fragment>
          ))}
        </MainMenus>
      </MainContents>
      {/* 서브 메뉴 */}
      <Buttons>
        {menus.sub.map((menu, index) => (
          <Fragment key={index}>
            {menu.page && menu.page.length > 0 ? (
              menu.page.includes(path) && (
                <Button
                  text={menu.label}
                  onClick={() => router.push(menu.path)}
                  theme={ButtonTheme.TEXT}
                />
              )
            ) : (
              <Button
                text={menu.label}
                onClick={() => router.push(menu.path)}
                theme={ButtonTheme.TEXT}
              />
            )}
          </Fragment>
        ))}
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100vw;
  height: 80px;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px 16px 40px;
  box-sizing: border-box;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.boxShadow.header};
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  > :first-child {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 6px;
      right: -5px;
      width: 1px;
      height: 10px;
      background-color: ${theme.colors.gray};
    }
  }
`;

const MainContents = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const MainMenus = styled.div`
  display: flex;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
