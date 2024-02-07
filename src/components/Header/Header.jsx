import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderSocialNav from "../HeaderSocialNav/HeaderSocialNav";
import HeaderPlatformNav from "../HeaderPlatformNav/HeaderPlatformNav";
import { useMediaQuery } from "react-responsive";

const Header = ({ toggleTheme, theme }) => {
  const isDesktop = useMediaQuery({ minWidth: 1170 });
  return (
    <header>
      <HeaderSocialNav toggleTheme={toggleTheme} theme={theme} />
      <HeaderMenu />
      {!isDesktop && <HeaderPlatformNav />}
    </header>
  );
};

export default Header;
