"use client";
import styled from "@emotion/styled";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.png";
import { useState } from "react";
import Link from "next/link";

const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
`;

const HeaderContainer = styled.div`
  /* 1128+32 */
  max-width: 1160px;
  margin: 0 auto;
  /* 내부에서 공간 만들기 */
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  /* 축 기준 정방향 */
  justify-content: space-between;
  /* 축 기준 반대*/
  align-items: center;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* 기준임을 명시, absolute를 쓸거면 꼭 필요 */
  position: relative;
`;

const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const MenuDropdown = styled.nav`
  position: absolute;
  top: 100%;
  background-color: white;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  border-radius: 1rem;
  right: -70%;
`;

const DropdownList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 130px;
`;

const DropdownListItem = styled.li`
  margin: 0;
  flex-grow: 1;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <Link href="/">
          <LeftBox>
            {/* 좌측 */}
            <Image src={Logo} alt="logo" />
            <h1>COZ Shopping</h1>
          </LeftBox>
        </Link>
        <RightBox>
          {/* 우측 */}
          <MenuButton onClick={toggleMenu}>
            <Image src={MenuIcon} alt="menu" width={30} height={20} />
          </MenuButton>
          {isOpen ? (
            <MenuDropdown>
              <DropdownList>
                <DropdownListItem>OOO님, 안녕하세요</DropdownListItem>
                <DropdownListItem>
                  <Link href="/products/list">상품리스트 페이지</Link>
                </DropdownListItem>
                <DropdownListItem>
                  <Link href="/bookmark">북마크 페이지</Link>
                </DropdownListItem>
              </DropdownList>
            </MenuDropdown>
          ) : null}
        </RightBox>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
