import React from "react";
import {
  SFooterCopyright,
  SFooterMenuCategory,
  SFooterMenuLink,
  SFooterMenuPlay,
  SFooterMenusContainer,
  SFooterMenusWrapper,
} from "./FooterMenus.styled";
import { useMediaQuery } from "react-responsive";

const FooterMenus = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <SFooterMenusContainer>
      <SFooterMenusWrapper>
        <SFooterMenuCategory>
          <h4>{isMobile ? "Category" : "Guides and Tips"}</h4>
          <ul>
            <li>Item 1</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ul>
        </SFooterMenuCategory>
        <SFooterMenuPlay>
          <h4>Play better</h4>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            {isMobile && <li>Item 6</li>}
          </ul>
        </SFooterMenuPlay>
        <SFooterMenuLink>
          <h4>Useful links</h4>
          <ul>
            <li>
              <a href="#top">link</a>
            </li>
            <li>
              <a href="#top">link</a>
            </li>
            <li>
              <a href="#top">link</a>
            </li>
            <li>
              <a href="#top">link</a>
            </li>
            <li>
              <a href="#top">link</a>
            </li>
          </ul>
        </SFooterMenuLink>
      </SFooterMenusWrapper>
      <SFooterCopyright>
        Copyright © 2024. Tous droits réservés.
      </SFooterCopyright>
    </SFooterMenusContainer>
  );
};

export default FooterMenus;
