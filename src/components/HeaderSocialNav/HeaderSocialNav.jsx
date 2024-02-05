import React from "react";
import {
  SHeaderNavWrapper,
  SIconNavItem,
  SIconNavList,
  SThemeContainer,
} from "./HeaderSocialNav.styled";
import Icons from "../../assets/icons/icons.svg";

const HeaderSocialNav = () => {
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
    <SHeaderNavWrapper>
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
        <label class="switch js-themes">
          <input type="checkbox" name="switcher_checkbox" />
          <span></span>
        </label>
      </SThemeContainer>
    </SHeaderNavWrapper>
  );
};

export default HeaderSocialNav;
