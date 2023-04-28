import { FC } from "react";
import Title from "./Text/Title";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const SkillCard: FC<{
  Icon: React.ReactNode;
  title: string;
  skills: string[];
}> = ({ title, skills, Icon }) => {
  return (
    <div className="grid gap-4 p-7 px-10 sm:px-7 bg-white text-black text-center shadow rounded w-72 h-72 m-auto">
      <div className="w-fit m-auto">{Icon}</div>
      <p>{title}</p>
      <ul className="styled-list text-sm text-left flex flex-col gap-1">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const IconBox: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-3 bg-blue-100/50 rounded-xl">{children}</div>;
};

const ICON_CLASSNAME = "h-5 w-5 fill-blue-300";

const About: FC = () => {
  return (
    <div>
      <Title aboveTitle="Who I am">About Me</Title>
      <p className="py-10 text-center">some content here</p>
      <div className="flex flex-col justify-around md:flex-row gap-6">
        <SkillCard
          Icon={
            <IconBox>
              <CodeBracketIcon
                className={ICON_CLASSNAME + " stroke-1 stroke-blue-300"}
              />
            </IconBox>
          }
          title="Programing Languages"
          skills={[
            "TypeScript / JavaScript",
            "Elixir",
            "Ruby",
            "Pyton",
            "C/C++",
          ]}
        />

        <SkillCard
          Icon={
            <IconBox>
              <GlobeAltIcon
                className={ICON_CLASSNAME + " stroke-0 stroke-blue-300"}
              />
            </IconBox>
          }
          title="Web Technologies"
          skills={["React", "GraphQL", "Sass", "Apollo Client", "Chakra UI"]}
        />

        <SkillCard
          Icon={
            <IconBox>
              <CodeBracketIcon
                className={ICON_CLASSNAME + " stroke-1 stroke-blue-300"}
              />
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
