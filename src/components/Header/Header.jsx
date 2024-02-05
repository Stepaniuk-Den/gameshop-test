import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderSocialNav from "../HeaderSocialNav/HeaderSocialNav";
import HeaderPlatformNav from "../HeaderPlatformNav/HeaderPlatformNav";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div>
      <HeaderSocialNav />
      <HeaderMenu />
      <HeaderPlatformNav />
      <Banner />
    </div>
  );
};

export default Header;
