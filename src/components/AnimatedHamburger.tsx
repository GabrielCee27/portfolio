/**
Copyright (c) 2023 by Fares Arnous (https://codepen.io/farnous/pen/abEbwMd)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { FC } from "react";

const AnimatedHamburger: FC<{
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}> = ({ isOpen, onClick, className = "" }) => {
  return (
    <button className={"relative group " + className} onClick={onClick}>
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
        <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "rotate-[42deg]" : ""
            }`}
          />
          <div
            className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
              isOpen ? "-translate-x-10" : ""
            }`}
          />
          <div
            className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isOpen ? "-rotate-[42deg]" : ""
            }`}
          />
        </div>
      </div>
    </button>
  );
};

export default AnimatedHamburger;
