import Title from "./Text/Title";
import NextImage from "next/image";
import Pills from "./Pills";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/20/solid";

interface Project {
  name: string;
  image: string;
  githubLink?: string;
  demoLink?: string;
  tech?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Portfolio Site",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
    tech: ["Next.js", "Tailwind"],
    githubLink: "https://github.com/GabrielCee27/portfolio",
  },
];

const ICON_CLASSNAME = "fill-gray-600 w-5 h-5 hover:fill-black rounded-full";

const Projects = () => {
  return (
    <>
      <Title aboveTitle="MY WORK">Projects</Title>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] w-full py-10 gap-5">
        {PROJECTS.map((p, index) => {
          const link = p.demoLink || p.githubLink;
          return (
            <li
              className="m-auto w-full h-64 relative flex flex-col justify-end cursor-pointer"
              key={index}
              onClick={() => {
                link && window.open(link, "_blank");
              }}
            >
              <NextImage
                fill
                style={{ objectFit: "cover" }}
                src={p.image}
                alt="Placeholder"
                className="rounded"
              />
              <div className="relative rounded-b bg-slate-100 py-4 px-3 text-black flex flex-col gap-1">
                <p>{p.name}</p>
                <div className="flex flex-row justify-between">
                  {p.tech?.length ? (
                    <span className="text-gray-700">
                      <Pills items={p.tech} />
                    </span>
                  ) : null}
                  <div className="flex flex-row gap-3">
                    {p.demoLink ? (
                      <a href={p.demoLink} target="_blank">
                        <LinkIcon className={ICON_CLASSNAME} />
                      </a>
                    ) : null}
                    {p.githubLink ? (
                      <a href={p.githubLink} target="_blank">
                        <CodeBracketIcon className={ICON_CLASSNAME} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
