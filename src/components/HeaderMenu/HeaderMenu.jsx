import React, { useState } from "react";
import {
  SHeaderInputWrapper,
  SHeaderMenuWrapper,
  SInput,
  SLabel,
  SLogo,
} from "./HeaderMenu.styled";
import Button from "../Button/Button";
import Icons from "../../assets/icons/icons.svg";
import HeaderMenuList from "../HeaderMenuList/HeaderMenuList";

const HeaderMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  return (
    <>
      <SHeaderMenuWrapper>
        <SLogo>LOGOTYPE</SLogo>
        <Button
          onClick={handleToggleMenu}
          text={
            <svg width={32} height={32}>
              {isShowMenu ? (
                <use href={Icons + "#burger-menu"} />
              ) : (
                <use href={Icons + "#cross"} />
              )}
            </svg>
          }
        />
      </SHeaderMenuWrapper>
      <SHeaderInputWrapper>
        <SLabel htmlFor="search">
          <SInput
            type="text"
            name="search"
            id="search"
            placeholder="Search for..."
          />
          <svg width={20} height={20}>
            <use href={Icons + "#furfur"} />
          </svg>
        </SLabel>
        <HeaderMenuList />
      </SHeaderInputWrapper>
    </>
  );
};

export default HeaderMenu;
