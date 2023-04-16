import { Inter } from "next/font/google";
import Image from "next/image";
import GithubIcon from "/public/icons/github-outline-svgrepo.svg";
import LinkedInIcon from "/public/icons/linkedin-outline-svgrepo.svg";
import Avatar from "/public/images/avatar.png";
import NextImage from "next/image";

const inter = Inter({ subsets: ["latin"] });

const EXTERNAL_LINKS = [
  {
    href: "https://github.com/GabrielCee27",
    icon: GithubIcon,
    alt: "Github Icon",
  },
  {
    href: "https://www.linkedin.com/in/gabe-cisneros",
    icon: LinkedInIcon,
    alt: "Linked In Icon",
  },
];

const ICON_WIDTH = 20;

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-evenly md:flex-row items-center md:justify-center">
      <div className="flex flex-col-reverse items-start justify-end gap-4 md:flex-row md:justify-around md:gap-0 md:items-center w-full">
        <div className="flex flex-col gap-5 justify-center max-w-md">
          <h1
            className={`text-[.6rem] ${inter.className} text-gray-300 tracking-[.5em] above-title`}
          >
            MY NAME IS
          </h1>
          <h2 className="font-semibold text-4xl">
            Gabriel <span className="text-blue-300">Cisneros.</span>
          </h2>
          <p className={`${inter.className} text-sm text-gray-200`}>
            Full Stack Software Engineer with 4+ years of experience with an
            emphasis in React. I am currently the team lead of Seller Retention
            at The RealReal which involves working in a fast-pace agile
            environment and ensuring seller facing features are delivered on
            time. Having a preference for frontend, I am excited about any
            opportunity involving customer facing React applications.
          </p>
          <div className="flex flex-row gap-5">
            {EXTERNAL_LINKS.map(({ href, icon, alt }) => (
              <a href={href} target="_blank">
                <Image
                  src={icon}
                  alt={alt}
                  width={ICON_WIDTH}
                  height={ICON_WIDTH}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-end h-72 w-64 bg-blue-50 rounded-md">
          <NextImage src={Avatar} alt="avatar" />
        </div>
      </div>
      <div className="flex items-end justify-start md:hidden bg-blue-50 w-screen h-52">
        <NextImage src={Avatar} alt="avatar" height={200} width={200} />
      </div>
    </section>
  );
};

export default Hero;
