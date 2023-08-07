import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

type Props = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeButton = ({ theme, setTheme }: Props) => {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => {
        themeSwitch();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <div
        className={`transition-transform ${
          localStorage.getItem("theme") === "dark"
            ? "rotate-180 transform "
            : "rotate-0 transform "
        }`}
      >
        {theme === "dark" ? (
          <SunIcon className="mt-1 h-8 w-8 cursor-pointer rounded-md bg-gray-700 p-2 text-slate-50 transition dark:hover:bg-gray-600" />
        ) : (
          <MoonIcon className="mt-1 h-8 w-8 cursor-pointer rounded-md bg-slate-50 p-2 text-gray-700 transition hover:bg-gray-200" />
        )}
      </div>
    </button>
  );
};

export default ThemeButton;
