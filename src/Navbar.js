import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";

const Navbar = ({ scrollPosition, screenHeight }) => {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    if (scrollPosition <= screenHeight) {
      setTheme(1);
    } else if (
      scrollPosition > screenHeight &&
      scrollPosition <= screenHeight * 2
    ) {
      setTheme(2);
    } else if (
      scrollPosition > screenHeight * 2 &&
      scrollPosition < screenHeight * 3
    ) {
      setTheme(3);
    } else {
      setTheme(4);
    }
  });

  // console.log("scroll position =", scrollPosition);
  // console.log("screen height =", screenHeight);
  // console.log(theme, "THEME");

  return (
    <header
      className={
        theme === 4
          ? "header-solar"
          : theme === 3
          ? "header-?"
          : theme === 2
          ? "header-gruv"
          : "header-synth"
      }
    >
      <div>
        <h2>
          <span
            className={
              theme === 4
                ? "color-style-tags-solar"
                : theme === 3
                ? "color-style-tags-?"
                : theme === 2
                ? "color-style-tags-gruv"
                : "color-style-tags-synth"
            }
          >
            &lt;
          </span>
          <span
            className={
              theme === 4
                ? "color-style-tags-text-solar"
                : theme === 3
                ? "color-style-tags-text-?"
                : theme === 2
                ? "color-style-tags-text-gruv"
                : "color-style-tags-text-synth"
            }
          >
            Navbar
          </span>
          <span
            className={
              theme === 4
                ? "color-style-tags-solar"
                : theme === 3
                ? "color-style-tags-?"
                : theme === 2
                ? "color-style-tags-gruv"
                : "color-style-tags-synth"
            }
          >
            &gt;
          </span>
        </h2>
      </div>
      <div className="header-link-container">
        <a href="#Home">
          <HomeIcon
            className={
              theme === 4
                ? "header-icon-solar"
                : theme === 3
                ? "header-icon-?"
                : theme === 2
                ? "header-icon-gruv"
                : "header-icon-synth"
            }
          ></HomeIcon>
        </a>
        <a href="#Projects">
          <AccountTreeIcon
            className={
              theme === 4
                ? "header-icon-solar"
                : theme === 3
                ? "header-icon-?"
                : theme === 2
                ? "header-icon-gruv"
                : "header-icon-synth"
            }
          ></AccountTreeIcon>
        </a>
        <a href="#Contact">
          <PersonIcon
            className={
              theme === 4
                ? "header-icon-solar"
                : theme === 3
                ? "header-icon-?"
                : theme === 2
                ? "header-icon-gruv"
                : "header-icon-synth"
            }
          ></PersonIcon>
        </a>
        <a href="#Contact">
          <MailIcon
            className={
              theme === 4
                ? "header-icon-solar"
                : theme === 3
                ? "header-icon-?"
                : theme === 2
                ? "header-icon-gruv"
                : "header-icon-synth"
            }
          ></MailIcon>
        </a>
      </div>
      <div>
        <h2>
          <span
            className={
              theme === 4
                ? "color-style-tags-solar"
                : theme === 3
                ? "color-style-tags-?"
                : theme === 2
                ? "color-style-tags-gruv"
                : "color-style-tags-synth"
            }
          >
            &lt;/
          </span>
          <span
            className={
              theme === 4
                ? "color-style-tags-text-solar"
                : theme === 3
                ? "color-style-tags-text-?"
                : theme === 2
                ? "color-style-tags-text-gruv"
                : "color-style-tags-text-synth"
            }
          >
            Navbar
          </span>
          <span
            className={
              theme === 4
                ? "color-style-tags-solar"
                : theme === 3
                ? "color-style-tags-?"
                : theme === 2
                ? "color-style-tags-gruv"
                : "color-style-tags-synth"
            }
          >
            &gt;
          </span>
        </h2>
      </div>
    </header>
  );
};

export default Navbar;
