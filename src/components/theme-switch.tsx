"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <span>
      {theme === "dark" ? (
        <Moon onClick={() => setTheme("light")} />
      ) : (
        <Sun onClick={() => setTheme("dark")} />
      )}
    </span>
  );
}

export default ThemeSwitch;
