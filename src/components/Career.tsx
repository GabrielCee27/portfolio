import { FC, useState } from "react";
import AboveTitle from "./Text/AboveTitle";
import Title from "./Text/Title";

const WORK_EXPERIENCE = [
  {
    company: "The RealReal",
    role: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "Nov 2020 - Current",
  },
  {
    company: "H.O.M.E",
    role: "Freelance Full Stack Engineer",
    location: "Remote",
    dates: "April 2020 - Nov 2020",
  },
] as const;

const Career: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <AboveTitle>CAREER PATH</AboveTitle>
          <Title>Work Experience</Title>
        </div>
        <div role="tablist" aria-labelledby="tablist-1">
          <ul className="flex flex-row gap-4">
            {WORK_EXPERIENCE.map((ex, index) => {
              const isSelected = selectedTab == index;
              return (
                <li>
                  <button
                    className={`${
                      isSelected ? "bg-blue-300" : ""
                    } rounded-full p-2 px-3`}
                    onClick={() => {
                      setSelectedTab(index);
                    }}
                    id={`career-tab-${index}`}
                    role="tab"
                    aria-selected={isSelected ? "true" : "false"}
                    aria-controls={`career-tabpanel-${index}`}
                  >
                    {ex.company}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {WORK_EXPERIENCE.map((ex, index) => {
          const isSelected = selectedTab == index;
          return (
            <div
              className={`${isSelected ? "block" : "hidden"}`}
              id={`career-tabpanel-${index}`}
              role="tabpanel"
              aria-labelledby={`career-tab-${index}`}
            >
              <div className="flex flex-col gap-3">
                <p>{ex.role}</p>
                <p className="text-xs text-gray-300">{ex.location}</p>
                <p className="text-xs text-gray-300 font-medium">{ex.dates}</p>
                <ul className="flex flex-row gap-3">
                  {["Next.js", "Prismic"].map((item) => (
                    <li className="rounded-md py-1 px-2 border border-gray-300 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
        <div className="h-[.5px] w-full bg-gray-300/50" />
        <div className="career-body text-sm text-gray-200">
          <ul>
            {["Improve Site", "Improve Site"].map((item) => (
              <li className="pt-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Career;
