import React from "react";
import {useTranslation} from "react-i18next";


import epita from "../assets/img/epita.png";
import fb from "../assets/img/fb.png";

export default function Studies() {


    const { t} = useTranslation();

    const studies = [
        {
            name: "EPITA",
            from: 2020,
            to: 2025,
            logo: epita,

        },
        {
            name: "Francs-Bourgeois",
            from:2014,
            in: 2022,
            logo: fb,

        },
        {
            name: "Francoise Cabrini",
            from: 2017,
            to: 2020,
            logo: fb,

        }
    ]

    return (
        <div className={" bg-lightModule dark:bg-darkModule h-full pt-12"}>
            <ul className="ml-3 flex flex-col">
                {studies.map((study, index) =>
                    <li key={study.name} className="flex">
                        {/*picture*/}
                        <div
                            className={(index === studies.length - 1 ? "" : "dark:bg-dot-pattern bg-dote-pattern") + "  w-16 bg-repeat-y justify-center justify-items-start z-1 justify-self-center content-center place-content-center bg-center object-scale-down"}>
                            <img src={study.logo} alt={study.name}
                                 className="object-scale-down w-16 h-16 rounded-full bg-white border-blue-700 border-4"/>
                        </div>
                        {/*description*/}
                        <div className={(index === studies.length - 1 ? "" : "mb-10 ") + " ml-5"}>
                            <div className="flex flex-row items-center gap-0">
                            <span
                                className="text-xl font-Lato text-left text-blue-600 font-bold">{study.name}</span>
                                <span
                                    className="bg-blue-700 ml-3 py-1 px-2 rounded-full flex-none">{study.in ? study.in : study.from + " - " + study.to}</span>
                            </div>
                            <span>{t("r")}</span>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    )
}