import { FC, useState } from "react";
import AnimatedHamburger from "./AnimatedHamburger";

const NAV_ITEMS = [
  { href: "#about", label: "About", current: true },
  { href: "#experience", label: "Experience", current: false },
  { href: "#projects", label: "Projects", current: false },
] as const;

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
      <nav className="bg-zinc-900 w-full">
        <div className="mx-auto max-w-7xl px-9 pt-2">
          <div className="relative flex h-16 items-center justify-between text-md sm:text-sm z-10">
            <a href="#" onClick={handleClose}>
              Gabriel.
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
            <div className="sm:hidden">
              <AnimatedHamburger isOpen={open} onClick={toggleOpen} />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <aside
        className={`sm:hidden bg-gray-800 fixed top-0 right-0 bottom-0 max-w-[65%] sm:max-w-none w-64 transform transition-all ease-in-out duration-500 ${
          open ? "translate-x-0 " : "translate-x-full"
        }`}
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
