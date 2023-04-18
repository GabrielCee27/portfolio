import { FC, ReactNode } from "react";

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return <h2 className="font-semibold text-4xl">{children}</h2>;
};

export default Title;
