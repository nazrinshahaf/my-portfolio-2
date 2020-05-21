import React, { useState, useEffect } from "react";

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
