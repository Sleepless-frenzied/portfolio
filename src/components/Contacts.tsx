import React from "react";
import {BsInstagram, BsLinkedin, BsDiscord, BsMailbox2, BsGithub} from "react-icons/bs";



const links=[
    {name: "GitHub", url: "https://github.com/Xyphes", icon: <BsGithub className={"m-1"}/>},
    {name: "LinkedIn", url: "https://www.linkedin.com/in/willy-somkhit-3818411b1/", icon: <BsLinkedin  className={"m-1"}/>},
    {name: "Instagram", url: "https://www.instagram.com/sleepless.frenzied/", icon: <BsInstagram className={"m-1"}/>},
    {name: "Xyphes̷#8697", url: "https://discord.com/users/410510463240241163", icon: <BsDiscord className={"m-1"}/>},
    {name: "sleepless.frenzied@gmail.com ", url: "mailto:sleepless.frenzied@gmail.com ", icon: <BsMailbox2 className={"m-1"}/>},

]

export default function Who() {
    return (
        <div className={"pt-6 sm:px-3 bg-lightModule dark:bg-darkModule h-full"}>

            {links.map((link, index) => (
                <>
                    <div key={index} className={"mx-3 sm:mx-6  hover:scale-110 duration-300 text-xl sm:text-2xl p-3 overflow-clip sm:p-6 bg-lightButton dark:bg-darkButton flex items-stretch h-max rounded-full "}>
                        {link.icon}
                        <a href={link.url}
                           target="_blank"
                           rel="noreferrer noopener"
                           key={index}
                        >
                            {link.name}
                        </a>
                    </div>
                    <br/>
                </>
            ))}

        </div>
    )
}