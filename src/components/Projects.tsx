import Title from "./Text/Title";
import NextImage from "next/image";
import Pills from "./Pills";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/20/solid";

interface Project {
  name: string;
  image: string;
  desc: string;
  githubLink?: string;
  demoLink?: string;
  tech?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "Portfolio Site",
    image: "/images/projects/portfolio-site.jpg",
    desc: "Latest personal website built with Next.js and Tailwind.",
    tech: ["Next.js", "Tailwind"],
    githubLink: "https://github.com/GabrielCee27/portfolio",
    demoLink: "https://gabriel-cisneros.com",
  },
];

const ICON_CLASSNAME = "fill-gray-600 w-5 h-5 hover:fill-black rounded-full";

const Projects = () => {
  return (
    <>
      <Title aboveTitle="MY WORK">Projects</Title>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] w-full py-10 gap-5">
        {PROJECTS.map((p, index) => {
          return (
            <li
              className="m-auto w-full h-80 grid grid-rows-[40%_auto] drop-shadow"
              key={index}
            >
              <div className="relative h-full">
                <NextImage
                  fill
                  style={{ objectFit: "cover" }}
                  src={p.image}
                  alt="Placeholder"
                  className="rounded-t"
                />
              </div>

              <div className="relative rounded-b bg-slate-100 p-5 text-black flex flex-col gap-1 justify-between">
                <div>
                  <p>{p.name}</p>
                  <p className="text-sm text-gray-700 py-3">{p.desc}</p>
                </div>

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
