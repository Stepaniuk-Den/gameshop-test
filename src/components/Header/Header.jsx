import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderSocialNav from "../HeaderSocialNav/HeaderSocialNav";
import HeaderPlatformNav from "../HeaderPlatformNav/HeaderPlatformNav";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isLaptop = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  // const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isPortrait = useMediaQuery({ orientation: "portrait" });
  // const isRetina = useMediaQuery({ minResolution: "2dppx" });
  return (
    <header>
      <HeaderSocialNav />
      <HeaderMenu />
      <HeaderPlatformNav />
    </header>
  );
};

export default Header;
