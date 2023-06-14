import React from "react";
import {
    SiCsharp,
    SiC,
    SiCplusplus,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiOcaml,
    SiPython,
    SiUnity,
    SiLinux, SiFlutter, SiGithub, SiReact, SiTailwindcss
} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import {useTranslation} from "react-i18next";



const skills =
    [
        {lang: "C#", color: "blue", icon: <SiCsharp className={"m-1"}/>},
        {lang: "C", color: "blue", icon: <SiC className={"m-1"}/>},
        {lang: "C++", color: "blue", icon: <SiCplusplus className={"m-1"}/>},
        {lang: "JavaScript", color: "blue", icon: <SiJavascript className={"m-1"}/>},
        {lang: "HTML", color: "blue", icon: <SiHtml5 className={"m-1"}/>},
        {lang: "CSS", color: "blue", icon: <SiCss3 className={"m-1"}/>},
        {lang: "Java", color: "blue", icon: <FaJava className={"m-1"}/>},
        {lang: "Python", color: "blue", icon: <SiPython className={"m-1"}/>},
        {lang: "OCaml", color: "blue", icon: <SiOcaml className={"m-1"}/>},
    ]
const tools = [
    {lang: "React", color: "blue", icon: <SiReact className={"m-1"}/>},
    {lang: "Tailwind", color: "blue", icon: <SiTailwindcss className={"m-1"}/>},
    {lang: "Unity", color: "blue", icon: <SiUnity className={"m-1"}/>},
    {lang: "Linux", color: "blue", icon: <SiLinux className={"m-1"}/>},
    {lang: "Flutter", color: "blue", icon: <SiFlutter className={"m-1"}/>},
    {lang: "Git", color: "blue", icon: <SiGithub className={"m-1"}/>},

]


export default function Skills(){

    const { t} = useTranslation();

    return (
        <div className={" bg-lightModule dark:bg-darkModule h-full pb-1.5"}>

            <h1 className=" text-xl md:text-5xl 2xl:text-6xl font-Lato text-left font-bold ml-1 md:ml-1.5 md:pt-3">{t('skills')}</h1>
            <div className={"flex flex-wrap "}>
                {skills.map((item, index) => (
                    <div key={index} className={`mt-3 mx-2 w-max 2xl:text-2xl   bg-lightButton dark:bg-darkButton flex items-stretch px-4 py-3 hover:scale-110 duration-300 font-bold rounded-full`}>
                        {item.icon}
                        <p key={index}>
                            {item.lang}
                        </p>
                    </div>
                ))}
            </div>
            <h1 className="mb-2 text-xl md:text-5xl 2xl:text-6xl font-Lato text-left font-bold ml-1 md:ml-1.5 md:mt-6">{t('framework')}</h1>
            <div className={"flex flex-wrap "}>
                {tools.map((item, index) => (
                    <div key={index} className={`mt-3 mx-2 w-max 2xl:text-2xl bg-lightButton dark:bg-darkButton flex items-stretch px-4 py-3 hover:scale-110 duration-300 font-bold rounded-full`}>
                        {item.icon}
                        <p key={index}>
                            {item.lang}
                        </p>
                    </div>
                ))}
            </div>



        </div>
    )
}