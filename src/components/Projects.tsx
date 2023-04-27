import Title from "./Text/Title";
import NextImage from "next/image";
import Pills from "./Pills";
import { LinkIcon } from "@heroicons/react/24/solid";

interface Project {
  name: string;
  image: string;
  href: string;
  tech?: string[];
}

const PROJECTS: Project[] = [
  {
    name: "EEG Capstone",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
    tech: ["Flask", "Python"],
    href: "www.google.com",
  },
  {
    name: "Portfolio Site",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
    tech: ["Next.js", "Tailwind"],
    href: "https://github.com/GabrielCee27/portfolio",
  },
];

const Projects = () => {
  return (
    <>
      <Title aboveTitle="MY WORK">Projects</Title>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(256px,_1fr))] w-full py-10 gap-5">
        {PROJECTS.map((p, index) => {
          return (
            <li
              className="m-auto w-full h-64 relative flex flex-col justify-end cursor-pointer"
              key={index}
            >
              <a href={p.href} target="_blank">
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
                    {p.href ? (
                      <LinkIcon className="h-6 w-6 text-black" />
                    ) : null}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
