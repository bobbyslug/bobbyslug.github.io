import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ThemeButton from "@/components/themeButton";
import NavProgressBar from "./navProgressBar";
//import { clear } from "console";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  theme: string;
  setTheme: (theme: string) => void;
  isTopPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, theme, setTheme }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground =
    theme === "dark" ? "bg-gray-900 drop-shadow" : "bg-green-100 drop-shadow";

  const completion = NavProgressBar();

  useEffect(() => {
    const handleResize = () => {
      console.log(isAboveMediumScreens);
      if (isAboveMediumScreens) setIsMenuToggled(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isAboveMediumScreens]);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} ${
          theme === "dark" ? "dark" : ""
        } fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <div className={`${flexBetween} text-lg`}>
              <Link
                page="Chris.dev"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text-md gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Portfolio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <ThemeButton theme={theme} setTheme={setTheme} />
                </div>
              </div>
            ) : (
              <button
                className={`${
                  theme === "dark" ? "bg-emerald-300" : "bg-violet-300"
                } rounded-full p-2`}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon
                  className={`${
                    theme === "dark" ? "text-gray-20" : "text-gray-500"
                  } h-6 w-6 transition-colors duration-200 hover:text-gray-400`}
                />
              </button>
            )}
          </div>
        </div>
        <span
          style={{ transform: `translateX(${completion - 100}%)` }}
          className={`${
            theme === "dark" ? "bg-emerald-300" : "bg-violet-400"
          } absolute bottom-0 h-1 w-full`}
        />
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && (
        <div
          className={`${
            theme === "dark" ? "dark bg-gray-900" : "bg-slate-200"
          } ${
            isMenuToggled ? "translate-x-0" : "translate-x-full"
          } duration-800 fixed bottom-0 right-0 z-40 h-full w-[300px] transform  drop-shadow-xl transition-transform ease-in-out`}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
