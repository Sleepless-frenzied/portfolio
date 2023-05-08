import React, {useState} from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

import {FaBeer, FaFolder} from 'react-icons/fa';

import ButtonTheme from "../components/ButtonTheme";
import ButtonLang from "../components/ButtonLang";
import {animated, useTransition} from "react-spring";
import Who from "../components/Who";
import Contacts from "../components/Contacts";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";


function Home() {

    const { t} = useTranslation();

    const buttonPages=[
        {name:t('who'), cmp: <Who/>},
        {name:t('contact'), cmp: <Contacts/>},
        {name:t('skills'), cmp: <Skills/>},
        {name:t('exp'),cmp: <Experiences/>},
    ]



    const  [comp,setComp] = useState(<Who/>);




    const transition = useTransition(comp,{
        from: {x:500, y:0, opacity: 0},
        enter:{x:0, y:0, opacity: 1},
        leave:{x:500, y:0, opacity: 0},
        trail:150
    });



    return (
        <div className={"h-screen p-16 overflow-hidden"}>
            <div className=" overflow-hidden relative bg-light dark:bg-dark border-lightDivi dark:border-darkDivi h-full border-8 grid grid-cols-3">
                {/*<FaBeer className={"text-black text-2xl"}/>
                <div className={"z-10 animate-spin-slow w-1/3"}>{t("material")}</div>
                */}


                <div className={"p-3 flex flex-col "}>
                    <div className={""}>
                        <p className={"text-2xl"}>Willy Somkhit</p>
                        <p>{t('job')}</p>
                    </div>
                    <span className={"h-8"}/>


                    {buttonPages.map((page) =>(
                        <button onClick={()=>setComp(page.cmp)} className={"w-max"}>
                            {page.cmp == comp ? "." : page.name}
                        </button>
                    ))}







                </div>

                <div className={" col-span-2 "}>
                    {/*{isVisible ? <Skills /> : ''}*/}
                    {transition((style,item)=>
                        item ? <animated.div style={style}><div className={""}>{comp}</div></animated.div> : ''
                    )}
                </div>


                <div className={"absolute ml-2 mb-1.5 bottom-0 left-0  flex flex-col"}>
                    <ButtonLang/>
                    <span className={"h-2"}></span>
                    <ButtonTheme/>
                </div>



            </div>
        </div>
    );
}

export default Home;
