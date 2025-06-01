"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/components/Work";
import { motion } from "framer-motion";
import { useState } from "react";

const projectData: Project[] = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "vue js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "vue js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Nexea Website",
    description: "dfdddfdfdfdfak modsfnm nmas nmoenm ",
    link: "/",
    github: "/",
  },
];

const uniqueCategories: string[] = [
  "all projects",
  ...Array.from(new Set(projectData.map((item) => item.category))),
];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [activeCategory, setActiveCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return activeCategory === "all projects"
      ? project
      : project.category === activeCategory;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={activeCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setActiveCategory(category)}
                  key={index}
                  value={category}
                  className={`${
                    category === activeCategory
                      ? "bg-primary"
                      : " hover:text-primary"
                  } capitalize w-[162px] md:w-auto relative`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {category === activeCategory && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 bg-primary  mix-blend-lighten"
                      style={{ borderRadius: 9999 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={activeCategory} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
