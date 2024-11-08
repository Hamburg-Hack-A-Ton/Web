"use client";

import { useEffect } from "react";
import Within from "./ttport/Within";
import "@theme-toggles/react/css/Within.css"
// eslint-disable-next-line no-redeclare
import React from "react";

const ThemeToggleButton: React.FC<{ size?: number }> = ({ size = 5 }) => {
  const storedTheme =
    typeof localStorage !== "undefined" ? localStorage.getItem("theme") : null;

  useEffect(() => {
    if (storedTheme === "dark") {
      document.body.classList.add("dark");
      setToggle(true);
    } else {
      document.body.classList.remove("dark");
      setToggle(false);
    }
  }, [storedTheme]);

  const [isToggled, setToggle] = React.useState(false);

  function toggle() {
    setToggle(!isToggled);
    const newTheme = isToggled ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  }

  const num = String(size);
  return (
    <Within
      duration={750}
      toggled={isToggled}
      onToggle={toggle}
      reversed
      className={`h-${num} w-${num}`}
    />
  );
};

ThemeToggleButton.displayName = "ThemeToggleButton";

export { ThemeToggleButton };
