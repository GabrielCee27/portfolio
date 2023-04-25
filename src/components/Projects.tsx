import { ReactNode } from "react";
import Title from "./Text/Title";
import NextImage from "next/image";

interface Project {
  name: string;
  type: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
  {
    name: "EEG Capstone",
    type: "Web Development",
    image: "/images/projects/jesse-orrico-60373-unsplash.jpeg",
  },
];

const Projects = () => {
  return (
    <>
      <Title aboveTitle="MY WORK">Projects</Title>
      <div className="flex flex-col md:flex-row py-10 gap-5 flex-wrap items-center justify-start">
        {PROJECTS.map((p) => {
          return (
            <div className="w-64 h-64 relative flex flex-col justify-end cursor-pointer">
              <NextImage
                fill
                style={{ objectFit: "cover" }}
                src={p.image}
                alt="Placeholder"
                className="rounded"
              />
              <div className="relative rounded-b bg-slate-100 py-4 px-3 text-black flex flex-col gap-1">
                <p className="">{p.name}</p>
                <ul className="flex flex-row flex-wrap">
                  {["Flask", "Python"].map((tech, index) => (
                    <li
                      key={index}
                      className="rounded-md mr-2 py-0.5 px-1.5 border border-gray-300 text-[11px]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
