import { FC, useState } from "react";
import Title from "./Text/Title";
import Pills from "./Pills";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const DescItems: FC<{ items: React.ReactNode[] }> = ({ items }) => {
  return (
    <ul className="m-0 p-0 grid gap-2 md:gap-1">
      {items.map((item, index) => (
        <li className="grid grid-cols-[auto_1fr] gap-1" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

interface Experience {
  company: string;
  role: string;
  location: string;
  dates: string;
  description: string[] | React.ReactNode;
  technology?: string[];
}

const WORK_EXPERIENCE: Experience[] = [
  {
    company: "The RealReal",
    role: "Senior Full Stack Engineer",
    location: "Remote",
    dates: "Nov 2020 - Current",
    description: (
      <DescItems
        items={[
          "Lead the migration of our seller dashboard, My Sales, to a Next.js app using Typescript and Apollo Client",
          "Create backend solutions for Rails and Phoenix applications which include maintaining Stripe webhooks, REST endpoints for consignment information, and creating Plaid Link GraphQL mutations",
          "Lead the adoption of Next’s Incremental Static Regeneration functionality for Prismic (CMS) pages which improved Lighthouse Performance scores by 7 points on average",
          "Help team growth by conducting interviews, mentoring an intern, and being active in our JAMstack Guild",
        ]}
      />
    ),
    technology: ["Next.js", "TypeScript", "GraphQL", "Elixir", "Ruby on Rails"],
  },
  {
    company: "H.O.M.E",
    role: "Freelance Full Stack Engineer",
    location: "Remote",
    dates: "April 2020 - Nov 2020",
    description: (
      <DescItems
        items={[
          "Designed and developed a video course web application with Django, React, PostgreSQL, and AWS S3",
          "Communicated with client on a weekly basis to review progress and create achievable deliverables",
          "Implemented Redux-like state with React’s Context and Reducer hooks to keep video angles in sync",
        ]}
      />
    ),
    technology: ["React", "AWS", "Django", "Python"],
  },
  {
    company: "Conventus",
    role: "Full Stack Developer",
    location: "San Francisco, CA",
    dates: "May 2019 - June 2020",
    description: (
      <DescItems
        items={[
          "Part of a team which developed an internal loan management application with Django and React",
          "Created a socket.io, Node micro-service to enable real-time loan editing which helped avoid hours of work being lost due to employees overwriting each others changes",
          "Implemented a price forecast chart powered by HouseCanary and Zillow APIs",
        ]}
      />
    ),
    technology: ["Django", "React", "Express", "Socket.IO", "Python"],
  },
  {
    company: "JAKKS Pacific",
    role: "Full Stack Developer Intern",
    location: "Santa Monica, CA",
    dates: "May 2018 - Aug 2018",
    description: (
      <>
        Participated in improving the company&#39;s intranet php website used by
        over 700 employees by being engaged in scrum meetings, creating
        solutions upon ticket submission, and executing automated Selenium
        frontend tests.
      </>
    ),
    technology: ["Flask", "Python", "PHP"],
  },
];

const Career: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      <Title aboveTitle="CAREER PATH">Work Experience</Title>

      <div className="flex flex-col gap-3 md:gap-24 md:flex-row pt-4">
        <ul
          id="career-tabs"
          className="p-1 bg-blue-100/10 rounded-full md:rounded-none md:bg-transparent md:pb-0 overflow-x-auto flex flex-row gap-1 md:gap-4 md:flex-col md:w-[40%] md:justify-start md:overflow-x-auto"
        >
          {WORK_EXPERIENCE.map((ex, index) => {
            const isSelected = selectedTab == index;
            return (
              <li key={index}>
                <button
                  className={`${
                    isSelected ? "bg-blue-300" : ""
                  } rounded-full py-2 px-3 md:w-[90%] md:text-left md:rounded-md md:py-3 md:px-4 whitespace-nowrap md:flex md:flex-row md:justify-between`}
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                  id={`career-tab-${index}`}
                  role="tab"
                  aria-selected={isSelected ? "true" : "false"}
                  aria-controls={`career-tabpanel-${index}`}
                >
                  {ex.company}
                  {isSelected ? (
                    <ChevronRightIcon className="hidden md:block fill-white h-5 w-5 mt-auto mb-auto" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="md:w-[60%] md:h-96">
          {WORK_EXPERIENCE.map((ex, index) => {
            const isSelected = selectedTab == index;
            return (
              <div
                className={`${
                  isSelected ? "block" : "hidden"
                } flex flex-col gap-4`}
                id={`career-tabpanel-${index}`}
                role="tabpanel"
                aria-labelledby={`career-tab-${index}`}
                key={index}
              >
                <div className="flex flex-col gap-3">
                  <p>{ex.role}</p>
                  <p className="text-xs text-gray-300">{ex.location}</p>
                  <p className="text-xs text-gray-300 font-medium">
                    {ex.dates}
                  </p>
                  {ex.technology?.length ? (
                    <Pills items={ex.technology} />
                  ) : null}
                </div>
                <div className="h-[.5px] w-full bg-gray-300/50" />
                <div className="career-body text-sm text-gray-200">
                  {ex.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
