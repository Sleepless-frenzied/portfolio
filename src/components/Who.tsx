import React from "react";
import {useTranslation} from "react-i18next";


export default function Who() {

    const { t} = useTranslation();

    return (
        <div className={""}>
            <div className={" bg-lightModule dark:bg-darkModule h-screen overflow-y-auto"}>
                <div className="mt-4 mb-5 ">
                    <img src={require("../assets/img/willy.somkhit-square.png")}
                         alt="..." className="w-1/3 mx-auto shadow rounded-full border-none"/>

                    <p className="text-base md:text-xl mx-6 text-justify">
                        {t('me')}
                    </p>
                    <br/>
                    <div className={"flex items-center justify-center "}>
                        <div className={ "hover:scale-110 duration-300"}>
                            <a href={process.env.PUBLIC_URL + '/CV.pdf'}
                               className=" rounded-full py-3 px-4 text-xl font-bold bg-blue-700 text-white "
                               download="CV-Willy-Somkhit-FR&ENG.pdf"
                               target="_blank"
                               rel="noreferrer noopener">{t('cv')}
                            </a>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                </div>
            </div>
        </div>
    )
}