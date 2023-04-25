import { Inter } from "next/font/google";
import Avatar from "/public/images/avatar.png";
import NextImage from "next/image";
import AboveTitle from "./Text/AboveTitle";
import Title from "./Text/Title";
import ExternalIconLinks from "./ExternalIconLinks";

const inter = Inter({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-evenly md:flex-row items-center md:justify-center">
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:justify-between md:gap-0 md:items-center w-full">
        <div className="flex flex-col gap-5 justify-center max-w-md">
          <Title aboveTitle="MY NAME IS">
            Gabriel <span className="text-blue-300">Cisneros.</span>
          </Title>
          <p className={`${inter.className} text-sm text-gray-200`}>
            Full Stack Software Engineer with 4+ years of experience with an
            emphasis in React. I am currently the team lead of Seller Retention
            at The RealReal which involves working in a fast-pace agile
            environment and ensuring seller facing features are delivered on
            time. Having a preference for frontend, I am excited about any
            opportunity involving customer facing React applications.
          </p>
          <div className="flex flex-row gap-5">
            <ExternalIconLinks />
          </div>
        </div>

        <div className="hidden md:flex items-end h-72 w-64 bg-blue-50 rounded-md">
          <NextImage src={Avatar} alt="avatar" />
        </div>
      </div>
      {/* <div className="flex items-end justify-start md:hidden bg-blue-50 w-screen h-52">
        <NextImage src={Avatar} alt="avatar" height={200} width={200} />
      </div> */}
    </section>
  );
};

export default Hero;
