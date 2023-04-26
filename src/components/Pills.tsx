import { FC } from "react";

const Pills: FC<{ items: React.ReactNode[] }> = ({ items }) => {
  return (
    <ul className="flex flex-row gap-2 flex-wrap">
      {items.map((item) => (
        <li className="rounded py-0.5 px-1.5 border border-gray-300 text-xs">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Pills;
