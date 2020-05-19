import React, { useState, useEffect } from "react";

const Navbar = ({ scrollPosition }) => {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    if (scrollPosition <= 384) {
      setTheme(1);
    }
    if (scrollPosition > 384) {
      setTheme(2);
    }
  });
  console.log(scrollPosition);
  console.log(theme, "THEME");

  return (
    <header className={theme === 2 ? "header-gruv" : "header-synth"}>
      <div>
        <h2>
          <span
            className={
              theme === 2 ? "color-style-tags-gruv" : "color-style-tags-synth"
            }
          >
            &lt;
          </span>
          <span
            className={
              theme === 2
                ? "color-style-tags-text-gruv"
                : "color-style-tags-text-synth"
            }
          >
            Navbar
          </span>
          <span
            className={
              theme === 2 ? "color-style-tags-gruv" : "color-style-tags-synth"
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
              theme === 2 ? "color-style-tags-gruv" : "color-style-tags-synth"
            }
          >
            &lt;/
          </span>
          <span
            className={
              theme === 2
                ? "color-style-tags-text-gruv"
                : "color-style-tags-text-synth"
            }
          >
            Navbar
          </span>
          <span
            className={
              theme === 2 ? "color-style-tags-gruv" : "color-style-tags-synth"
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
