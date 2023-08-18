import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

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
        className={`transition-transform duration-1000 ${
          localStorage.getItem("theme") === "dark"
            ? "rotate-180 transform "
            : "rotate-0 transform "
        }`}
      >
        {theme === "dark" ? (
          <SunIcon className="nav-text dark mt-1 h-9 w-9 cursor-pointer rounded-md p-2 " />
        ) : (
          <MoonIcon className="nav-text mt-1 h-9 w-9 cursor-pointer rounded-md  p-2 " />
        )}
      </div>
    </button>
  );
};

export default ThemeButton;
