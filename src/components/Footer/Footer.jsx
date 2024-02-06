import React from "react";
import {
  SFooterContainer,
  SFooterLogo,
  SFooterNavItem,
  SFooterNavList,
  SFooterSocialCard,
  SFooterWrapper,
} from "./Footer.styled";
import Icons from "../../assets/icons/icons.svg";
import FooterMenus from "../FooterMenus/FooterMenus";

const Footer = () => {
  return (
    <SFooterContainer>
      <SFooterWrapper>
        <SFooterSocialCard>
          <SFooterLogo>LOGOTYPE</SFooterLogo>
          <p>Lorem Ipsum is simply dummy</p>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five
          </p>
          <SFooterNavList>
            <SFooterNavItem>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={24} height={24}>
                  <use href={Icons + "#facebook-footer"} />
                </svg>
              </a>
            </SFooterNavItem>
            <SFooterNavItem>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={24} height={24}>
                  <use href={Icons + "#twitter-footer"} />
                </svg>
              </a>
            </SFooterNavItem>
            <SFooterNavItem>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={24} height={24}>
                  <use href={Icons + "#instagram-footer"} />
                </svg>
              </a>
            </SFooterNavItem>
            <SFooterNavItem>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={24} height={24}>
                  <use href={Icons + "#youtube-footer"} />
                </svg>
              </a>
            </SFooterNavItem>
            <SFooterNavItem>
              <a
                href="https://www.news.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <svg width={37} height={37}>
                    <use href={Icons + "#googlenews-footer"} />
                  </svg>
                </span>
              </a>
            </SFooterNavItem>
            <SFooterNavItem>
              <a
                href="https://uk.wikipedia.org/wiki/RSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width={24} height={24}>
                  <use href={Icons + "#lenta-footer"} />
                </svg>
              </a>
            </SFooterNavItem>
          </SFooterNavList>
        </SFooterSocialCard>
        <FooterMenus />
      </SFooterWrapper>
    </SFooterContainer>
  );
};

export default Footer;
