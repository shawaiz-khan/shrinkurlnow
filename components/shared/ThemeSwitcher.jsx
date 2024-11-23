"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="transition-all   "
    >
      {theme === "dark" ? (
        <GoSun className=" text-white " />
      ) : (
        <GoMoon className=" text-purple-800" />
      )}
    </button>
  );
}
