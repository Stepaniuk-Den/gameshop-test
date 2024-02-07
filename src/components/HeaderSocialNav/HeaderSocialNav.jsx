import React from "react";
import {
  SHeaderItem,
  SHeaderList,
  SHeaderNavContainer,
  SHeaderNavWrapper,
  SIconNavItem,
  SIconNavList,
  SThemeContainer,
} from "./HeaderSocialNav.styled";
import Icons from "../../assets/icons/icons.svg";
import { useMediaQuery } from "react-responsive";

const HeaderSocialNav = () => {
  const isLaptop = useMediaQuery({ minWidth: 768 });
  // const themeToggle = document.querySelector("input[name = switcher_checkbox]");

  // if (localStorage.getItem("theme") === "dark") {
  //   document.body.classList.add("dark");
  //   themeToggle.checked = true;
  // }

  // themeToggle.addEventListener("change", handlerThemeChange);

  // function handlerThemeChange() {
  //   if (themeToggle.checked) {
  //     document.body.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //     return;
  //   }
  //   document.body.classList.remove("dark");
  //   localStorage.setItem("theme", "light");
  // }

  return (
    <SHeaderNavContainer>
      <SHeaderNavWrapper>
        {isLaptop && (
          <SHeaderList>
            <SHeaderItem>
              <span>
                <svg width={16} height={14}>
                  <use href={Icons + "#palm"} />
                </svg>
              </span>
              Menu item 1
            </SHeaderItem>
            <SHeaderItem>
              <span>
                <svg width={16} height={14}>
                  <use href={Icons + "#other"} />
                </svg>
              </span>
              Menu item 2
            </SHeaderItem>
            <SHeaderItem>
              <span>
                <svg width={16} height={14}>
                  <use href={Icons + "#android"} />
                </svg>
              </span>
              Menu item 3
            </SHeaderItem>
          </SHeaderList>
        )}
        <SIconNavList>
          <SIconNavItem>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#facebook"} />
              </svg>
            </a>
          </SIconNavItem>
          <SIconNavItem>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#twitter"} />
              </svg>
            </a>
          </SIconNavItem>
          <SIconNavItem>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#instagram"} />
              </svg>
            </a>
          </SIconNavItem>
          <SIconNavItem>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#youtube"} />
              </svg>
            </a>
          </SIconNavItem>
          <SIconNavItem>
            <a
              href="https://www.news.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#googlenews"} />
              </svg>
            </a>
          </SIconNavItem>
          <SIconNavItem>
            <a
              href="https://uk.wikipedia.org/wiki/RSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg>
                <use href={Icons + "#lenta"} />
              </svg>
            </a>
          </SIconNavItem>
        </SIconNavList>
        <SThemeContainer>
          <label className="switch js-themes">
            <input type="checkbox" name="switcher_checkbox" />
            <span></span>
          </label>
        </SThemeContainer>
      </SHeaderNavWrapper>
    </SHeaderNavContainer>
  );
};

export default HeaderSocialNav;
