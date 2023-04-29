import { FC } from "react";
import Title from "./Text/Title";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/react/20/solid";
import DottedExternalLink from "./Links/DottedExternalLink";

const USF_CS_LINK =
  "https://www.usfca.edu/arts-sciences/programs/undergraduate/computer-science/program-overview";

const SkillCard: FC<{
  Icon: React.ReactNode;
  title: string;
  skills: string[];
}> = ({ title, skills, Icon }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-[25%_20%_auto] gap-1 p-7 px-10 sm:px-7 bg-white text-black text-center shadow rounded w-72 h-72 m-auto">
      <div className="w-fit m-auto">{Icon}</div>
      <p className="m-auto">{title}</p>
      <ul className="text-sm text-left grid grid-cols-2 gap-1 pt-2">
        {skills.map((skill, index) => {
          const isEven = index % 2 == 0;
          return (
            <li key={index} className={isEven ? "text-left" : "text-right"}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const IconBox: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-3 bg-blue-100/40 rounded-xl">{children}</div>;
};

const ICON_CLASSNAME = "h-6 w-6 fill-blue-300";

const About: FC = () => {
  return (
    <div>
      <Title aboveTitle="SKILLS">Specialized In</Title>
      <p className="py-10 text-center">
        After graduating with a BS in Computer Science from the{" "}
        <DottedExternalLink href={USF_CS_LINK}>
          University of San Franciso
        </DottedExternalLink>{" "}
        I dove head first into{" "}
        <DottedExternalLink href="https://react.dev/">React</DottedExternalLink>{" "}
        and web development. Currently, I am the team lead of Seller Retention
        at The RealReal which involves working in a fast-pace, agile environment
        and ensuring seller facing features are delivered on time.
      </p>
      <p className="text-center pb-6">
        Here are the main tools I'm familair with
      </p>
      <div className="flex flex-col gap-5 md:flex-row md:gap-1 md:justify-around">
        <SkillCard
          Icon={
            <IconBox>
              <CodeBracketIcon className={ICON_CLASSNAME} />
            </IconBox>
          }
          title="Programing Languages"
          skills={[
            "TypeScript",
            "JavaScript",
            "Elixir",
            "Ruby",
            "Python",
            "C/C++",
          ]}
        />

        <SkillCard
          Icon={
            <IconBox>
              <GlobeAltIcon className={ICON_CLASSNAME} />
            </IconBox>
          }
          title="Web Technologies"
          skills={[
            "React",
            "GraphQL",
            "REST API",
            "Sass",
            "HTML/CSS",
            "Chakra UI",
          ]}
        />

        <SkillCard
          Icon={
            <IconBox>
              <CogIcon className={ICON_CLASSNAME} />
            </IconBox>
          }
          title="Frameworks"
          skills={["Next.js", "Phoenix", "Rails", "Django", "Flask", "Express"]}
        />
      </div>
    </div>
  );
};

export default About;
