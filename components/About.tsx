"use client";

import { ABOUT } from "@/config/anchors";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";
import Image from "next/image";
import { forwardRef, useState } from "react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type TabsContent = "personal" | "qualifications" | "skills";

interface TabsInfo {
  value: TabsContent;
  label: string;
}

interface InfoItem {
  icon: JSX.Element;
  text: string;
}

const tabs: TabsInfo[] = [
  { value: "personal", label: "Personal info" },
  { value: "qualifications", label: "Qualifications" },
  { value: "skills", label: "Skills" },
];

interface QualificationDataItem {
  title: string;
  data: {
    [key: string]: string;
  }[];
}

interface SkillDataItem {
  title: string;
  data: {
    [key: string]: string;
  }[];
}

const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: "Gromov Oleg",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "Gromov Oleg",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Gromov Oleg",
  },
  {
    icon: <Calendar size={20} />,
    text: "Gromov Oleg",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Gromov Oleg",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Gromov Oleg",
  },
];

const qualificationData: QualificationDataItem[] = [
  {
    title: "education",
    data: [
      {
        university: "Example",
        qualification: "Eptit",
        years: "2020-2021",
      },
      {
        university: "Example",
        qualification: "Eptit2",
        years: "2028-2022",
      },
      {
        university: "Example",
        qualification: "Eptit3",
        years: "2026-2027",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Mick",
        role: "Eptit",
        years: "2020-2021",
      },
      {
        company: "Dick",
        role: "Eptit2",
        years: "2028-2022",
      },
      {
        company: "Skoltech",
        role: "Eptit3",
        years: "2026-2027",
      },
    ],
  },
];

const skillData: SkillDataItem[] = [
  {
    title: "skills",
    data: [
      { name: "skill1" },
      { name: "skill2" },
      { name: "skill3" },
      { name: "skill4" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState<TabsContent>(tabs[0].value);

  const getData = <T extends { title: string }>(
    arr: T[],
    title: string
  ): T | undefined => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section id={ABOUT} className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Aboot me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-abut_shape_dark w-[505px] h-[505px] bg-no-repeat relative flex justify-center items-end"
              imgSrc="/about/developer.svg"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border derk:border-none">
                {tabs.map((tab, index) => {
                  return (
                    <>
                      <TabsTrigger
                        value={tab.value}
                        key={index}
                        onClick={() => setActiveTab(tab.value)}
                        className={`${
                          activeTab === tab.value ? "" : "hover:text-white/60"
                        } w-[162px] xl:w-auto relative`}
                        style={{
                          WebkitTapHighlightColor: "transparent",
                        }}
                      >
                        {activeTab === tab.value && (
                          <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 bg-primary mix-blend-lighten"
                            style={{ borderRadius: 9999 }}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}
                        {tab.label}
                      </TabsTrigger>
                    </>
                  );
                })}
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I am super loser
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4  mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Russian, English</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience")?.data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-xg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education")?.data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className=" text-xg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills")?.data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools")?.data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image
                                  src={imgPath}
                                  width={48}
                                  height={48}
                                  alt=""
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );

  About.displayName = "About";
});

export default About;
