import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderSocialNav from "../HeaderSocialNav/HeaderSocialNav";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <HeaderSocialNav toggleTheme={toggleTheme} theme={theme} />
      <HeaderMenu />
    </header>
  );
};

export default Header;
