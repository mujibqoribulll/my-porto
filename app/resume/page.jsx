"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const about = {
    title: "About me",
    description:
      "I am Qoribul Mujib, a passionate Frontend Developer from Indonesia, specializing in building modern and responsive web applications.",
    info: [
      {
        filedName: "Name",
        filedValue: "Qoribul Mujib",
      },
      {
        filedName: "Phone",
        filedValue: "(+62) 8515 6205 654",
      },
      {
        filedName: "Nationality",
        filedValue: "Indonesia",
      },
      {
        filedName: "Email",
        filedValue: "muhamadqoribulmujib@gmail.com",
      },
      {
        filedName: "Freelane",
        filedValue: "Available",
      },
      {
        filedName: "Langguages",
        filedValue: "Indonesia, English",
      },
    ],
  };

  const experiance = {
    icon: "/assetsresume/badge.svg",
    title: "My experience",
    description:
      "I am a passionate and dedicated developer with extensive experience in mobile and web development. I have worked as a Mobile Developer, Full Stack Developer, and Frontend Developer, building high-quality applications for a variety of platforms. Throughout my career, I have focused on creating efficient, scalable, and user-centered solutions while continuously improving my technical skills. I am committed to delivering impactful digital products and always strive to stay updated with the latest technologies and best practices in the industry.",
    items: [
      {
        company: "PT TELKOM",
        position: "Mobile Developer",
        duration: "2023 - 2024",
      },
      {
        company: "PT Smooets Teknologi Outsourcing",
        position: "Mobile Developer",
        duration: "2022 - 2023",
      },
      {
        company: "PT ITAsoft Indonesia",
        position: "Full Stack Developer",
        duration: "2022",
      },
      {
        company: "PT. Kreasi Digital Indo Utama",
        position: "Frontend Developer",
        duration: "2021",
      },
    ],
  };

  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description:
      "Throughout my academic journey, I have built a strong foundation in information technology and computer networking. My education has equipped me with both theoretical knowledge and practical skills, preparing me to tackle real-world challenges in software development and IT infrastructure.",
    items: [
      {
        institution: "Universitas Komputer Indonesia",
        degree: "Teknik Informatika",
        duration: "2016 - 2020",
      },
      {
        institution: "SMK TI Pembangunan",
        degree: "Teknik Komputer Jaringan",
        duration: "2014 - 2016",
      },
    ],
  };

  const skills = {
    title: "My skills",
    description:
      "Over the years, I have developed a strong proficiency in modern web development technologies.  I am passionate about building clean, scalable, and user-focused digital solutions.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <FaHtml5 />,
        name: "php",
      },
      {
        icon: <FaHtml5 />,
        name: "laravel",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container  mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                <h3 className="text-4xl font-bold">{experiance?.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {experiance?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiance?.items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item?.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item?.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item?.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                <h3 className="text-4xl font-bold">{education?.title}</h3>
                <p className=" text-white/60 mx-auto xl:mx-0">
                  {education?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education?.items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item?.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item?.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item?.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-justify">
                  <h3 className="text-4xl font-bold">{skills?.title}</h3>
                  <p className=" text-white/60 mx-auto xl:mx-0">
                    {skills?.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skills?.skillList?.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill?.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill?.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-justify"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about?.title}</h3>
                <p className="">{about?.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[660px] mx-auto xl:mx-0">
                  {about?.info?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-center items-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item?.filedName}</span>
                        <span className="text-xl w-full">
                          {item?.filedValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
