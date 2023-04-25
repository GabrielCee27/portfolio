import { FC, ReactNode } from "react";
import AboveTitle from "./AboveTitle";

const Title: FC<{ children: ReactNode; aboveTitle?: ReactNode }> = ({
  children,
  aboveTitle,
}) => {
  return (
    <div className="flex flex-col gap-5">
      {aboveTitle ? <AboveTitle>{aboveTitle}</AboveTitle> : null}
      <h2 className="font-semibold text-4xl">{children}</h2>
    </div>
  );
};

export default Title;
