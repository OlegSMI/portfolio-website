"use client";

import { ABOUT } from "@/config/anchors";
import smoothScroll from "@/services/smoothScroll";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import Badge from "./Badge";
import DevImg from "./DevImg";
import Socials from "./Socials";
import { Button } from "./ui/button";

// const Hero = ({ aboutEl }: { aboutEl: React.RefObject<HTMLDivElement> }) => {
const Hero = () => {
  const scrollToInfo = () => {
    // if (aboutEl.current !== null) {
    //   console.log(aboutEl.current);
    const aboutEl = document.getElementById(ABOUT);
    const targetY = aboutEl ? aboutEl?.offsetTop : 0;

    smoothScroll(targetY, 1000);
    // aboutEl.current.scrollIntoView({ behavior: "smooth", block: "end" });
    // }
  };

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-cover bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-cewnter xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Oleg Gromov</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights info myself. my vocation journey,
              and what i mister super crutoi and no loser
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link
                href="https://t.me/stredds"
                target="_blank"
                className="flex justify-center"
              >
                <Button className="gap-x-2 ">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experiance"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText="k"
              badgeText="Finished Projects"
            />

            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText="k"
              badgeText="Happy Clients"
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-1"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom flex justify-center items-center"
              width={400}
              height={300}
              imgSrc="/developer.gif"
            />
          </div>
        </div>
        <div
          onClick={() => scrollToInfo()}
          style={{ cursor: "pointer" }}
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce bg-primary/10 dark:bg-secondary/50 rounded-full p-10"
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
