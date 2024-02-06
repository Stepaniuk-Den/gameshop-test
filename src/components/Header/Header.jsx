import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderSocialNav from "../HeaderSocialNav/HeaderSocialNav";
import HeaderPlatformNav from "../HeaderPlatformNav/HeaderPlatformNav";

const Header = () => {
  return (
    <header>
      <HeaderSocialNav />
      <HeaderMenu />
      <HeaderPlatformNav />
    </header>
  );
};

export default Header;
