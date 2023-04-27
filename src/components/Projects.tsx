import { Fragment, ReactNode } from "react";
import Title from "./Text/Title";
import NextImage from "next/image";
import Pills from "./Pills";

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
              <NextImage
                fill
                style={{ objectFit: "cover" }}
                src={p.image}
                alt="Placeholder"
                className="rounded"
              />
              <div className="relative rounded-b bg-slate-100 py-4 px-3 text-black flex flex-col gap-1">
                <p className="">{p.name}</p>
                <span className="text-gray-700">
                  <Pills items={["Flask", "Python"]} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
