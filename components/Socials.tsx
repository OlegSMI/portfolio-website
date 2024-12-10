"use client";

import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTelegramFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  {
    path: "/",
    name: <RiYoutubeFill />,
  },
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/OlegSMI",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiTelegramFill />,
  },
];

const Socials = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string;
  iconsStyles: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}> {icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
