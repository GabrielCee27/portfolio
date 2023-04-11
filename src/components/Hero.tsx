import { Inter } from "next/font/google";
import Image from "next/image";
import GithubIcon from "/public/icons/github-outline-svgrepo.svg";

const inter = Inter({ subsets: ["latin"] });

const EXTERNAL_LINKS = [
  {
    href: "https://github.com/GabrielCee27",
    icon: GithubIcon,
    alt: "Github Icon",
  },
  {
    href: "https://github.com/GabrielCee27",
    icon: GithubIcon,
    alt: "Github Icon",
  },
];

const ICON_WIDTH = 20;

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col gap-4">
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
          emphasis in React. I am currently the team lead of Seller Retention at
          The RealReal which involves working in a fast-pace agile environment
          and ensuring seller facing features are delivered on time. Having a
          preference for frontend, I am excited about any opportunity involving
          customer facing React applications.
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
    </section>
  );
};

export default Hero;
