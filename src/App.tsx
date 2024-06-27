import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import About from "@/scenes/portfolio";
import Portfolio from "@/scenes/about";
import Contact from "./scenes/contact";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY > 0) setIsTopPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (theme === "dark" || (!theme && systemTheme)) {
    document.documentElement.classList.add("dark");
  }

  return (
    <div className={`app ${theme === "dark" ? "dark" : ""} background text`}>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        theme={theme}
        setTheme={setTheme}
        isTopPage={isTopPage}
      />
      <Home setSelectedPage={setSelectedPage} theme={theme} />
      <About setSelectedPage={setSelectedPage} theme={theme}></About>
      <Portfolio setSelectedPage={setSelectedPage} theme={theme}></Portfolio>
      <Contact setSelectedPage={setSelectedPage} theme={theme}></Contact>
    </div>
  );
}

export default App;
