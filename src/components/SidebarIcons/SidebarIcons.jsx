import React from "react";
import Icons from "../../assets/icons/icons.svg";
import {
  SSidebarContainer,
  SSidebarItem,
  SSidebarList,
} from "./SidebarIcons.styled";

const SidebarIcons = () => {
  return (
    <SSidebarContainer>
      <SSidebarList>
        <SSidebarItem color={"#3a579a"}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#facebook-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
        <SSidebarItem color={"#00abf0"}>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#twitter-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
        <SSidebarItem color={"#24a2e0"}>
          <a
            href="https://web.telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#telegram-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
        <SSidebarItem color={"#cd1c1f"}>
          <a
            href="https://pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#pinterest-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
        <SSidebarItem color={"#fc461e"}>
          <a
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#reddit-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
        <SSidebarItem color={"#f95149"}>
          <a
            href="https://www.heart.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <svg width={20} height={20}>
                <use href={Icons + "#heart-side"} />
              </svg>
            </span>
          </a>
        </SSidebarItem>
      </SSidebarList>
    </SSidebarContainer>
  );
};

export default SidebarIcons;
