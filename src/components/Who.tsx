import React from "react";
import {useTranslation} from "react-i18next";


export default function Who() {

    const { t} = useTranslation();

    return (
        <div className={" bg-lightModule dark:bg-darkModule h-full p-3"}>

            <img src={require("../assets/img/willy.somkhit-square.png")}
                 alt="..." className="w-1/3 2xl:w-1/4 mx-auto shadow rounded-full border-none"/>

            <p className=" text-justify">
                {t('me')}
            </p>
            <br/>
            <div className={"flex items-center justify-center "}>
                <div className={ "hover:scale-110 duration-300"}>
                    <br/>
                    <a href={process.env.PUBLIC_URL + '/CV.pdf'}
                       className="md:text-xl 2xl:text-5xl rounded-full py-3 px-4  2xl:py-6 2xl:px-8 text-xl font-bold bg-blue-700 text-white "
                       download="CV-Willy-Somkhit-FR&ENG.pdf"
                       target="_blank"
                       rel="noreferrer noopener">{t('cv')}
                    </a>
                </div>
            </div>

        </div>
    )
}