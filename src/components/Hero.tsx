import { Inter } from "next/font/google";
import NextImage from "next/image";
import Title from "./Text/Title";
import ExternalIconLinks from "./ExternalIconLinks";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {

  return (
    <section
      id="#"
      className="min-h-screen flex flex-col justify-evenly md:flex-row items-center md:justify-center"
    >
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:justify-between md:gap-0 md:items-center w-full">
        <div className="flex flex-col gap-5 justify-center max-w-md">
          <Title aboveTitle="MY NAME IS">
            Gabriel <span className="text-blue-300">Cisneros.</span>
          </Title>
          <p className={`${inter.className} text-sm text-gray-200`}>
          Software Engineer with 4+ years of experience creating web applications with cutting-edge engineering solutions for internal and external facing applications.
           Proven ability to lead  projects to production. Extensive expertise in React as well as micro-services.
          </p>
          <div className="flex flex-row gap-5">
            <ExternalIconLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
