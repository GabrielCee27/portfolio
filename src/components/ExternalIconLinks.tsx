import Image from "next/image";
import GithubIcon from "/public/icons/github-outline-svgrepo.svg";
import LinkedInIcon from "/public/icons/linkedin-outline-svgrepo.svg";
import { FC } from "react";

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

const ExternalIconLinks: FC = () => {
  return (
    <>
      {EXTERNAL_LINKS.map(({ href, icon, alt }, index) => (
        <a href={href} target="_blank" key={`external-link-${index}`}>
          <Image src={icon} alt={alt} width={ICON_WIDTH} height={ICON_WIDTH} />
        </a>
      ))}
    </>
  );
};

export default ExternalIconLinks;
