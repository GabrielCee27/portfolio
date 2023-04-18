import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

const AboveTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h1
      className={`text-[.6rem] ${inter.className} text-gray-300 tracking-[.5em] above-title`}
    >
      {children}
    </h1>
  );
};

export default AboveTitle;
