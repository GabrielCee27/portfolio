import { FC, useState } from "react";
import AnimatedHamburger from "./AnimatedHamburger";

const NAV_ITEMS = [
  { href: "#about", label: "About", current: true },
  { href: "#experience", label: "Experience", current: false },
  { href: "#projects", label: "Projects", current: false },
] as const;

const MOBILE_MENU_Z_INDEX = "z-[9]";
const BLUR_Z_INDEX = "z-[8]";
const NAV_Z_INDEX = "z-10";
const MOBILE_ICONS_Z_INDEX = "z-[12]";

const Navigation: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((open) => !open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 bg-zinc-900 w-full shadow-md ${NAV_Z_INDEX}`}
      >
        <div className="mx-auto max-w-7xl px-9 pt-2">
          <div className="relative flex h-16 items-center justify-between text-md sm:text-sm">
            <a href="#" className={MOBILE_ICONS_Z_INDEX} onClick={handleClose}>
              G.
            </a>
            <div className="hidden sm:block flex space-x-10 items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  href={item.href}
                  className={`${
                    item.current ? "text-white" : "text-gray-400"
                  } hover:text-white`}
                >
                  {item.label}
                </a>
              ))}
              {ResumeButton}
            </div>
            <div className={`sm:hidden`}>
              {/* Mobile Menu */}
              <aside
                className={`sm:hidden ${MOBILE_MENU_Z_INDEX} bg-gray-800 fixed top-0 right-0 bottom-0 max-w-[65%] sm:max-w-none w-64 transform transition-all ease-in-out duration-500 ${
                  open ? "translate-x-0 " : "translate-x-full"
                } shadow-md`}
              >
                <div className="flex flex-col items-end pt-40 gap-9 items-center">
                  {NAV_ITEMS.map((item) => (
                    <a href={item.href} onClick={handleClose}>
                      {item.label}
                    </a>
                  ))}
                  {ResumeButton}
                </div>
              </aside>
              <AnimatedHamburger
                isOpen={open}
                onClick={toggleOpen}
                className={`${MOBILE_ICONS_Z_INDEX}`}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Background Blur */}
      {open ? (
        <div
          className={`absolute overflow-hidden sm:hidden top-0 bottom-0 h-100 w-full backdrop-blur-sm ${BLUR_Z_INDEX}`}
          onClick={handleClose}
        />
      ) : null}
    </>
  );
};

export default Navigation;

const ResumeButton = (
  <a href="/files/resume.pdf" target="_blank">
    <button className="text-xs border border-1 border-blue-300 border-blue-300 rounded-md p-2 px-3 text-blue-300 hover:text-white hover:bg-blue-300">
      Resume
    </button>
  </a>
);
