import React from "react";
import { SPlatformItem, SPlatformList } from "./HeaderPlatformNav.styled";
import Icons from "../../assets/icons/icons.svg";

const HeaderPlatformNav = () => {
  return (
    <SPlatformList>
      <SPlatformItem>
        <span>
          <svg width={16} height={14}>
            <use href={Icons + "#palm-menu"} />
          </svg>
        </span>
        Menu item 1
      </SPlatformItem>
      <SPlatformItem>
        <span>
          <svg width={16} height={14}>
            <use href={Icons + "#other-menu"} />
          </svg>
        </span>
        Menu item 2
      </SPlatformItem>
      <SPlatformItem>
        <span>
          <svg width={16} height={14}>
            <use href={Icons + "#android-menu"} />
          </svg>
        </span>
        Menu item 3
      </SPlatformItem>
      <SPlatformItem>
        <span>
          <svg width={16} height={14}>
            <use href={Icons + "#apple-menu"} />
          </svg>
        </span>
        Menu item 4
      </SPlatformItem>
    </SPlatformList>
  );
};

export default HeaderPlatformNav;
