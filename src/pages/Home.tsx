import React from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';
import useDarkMode from "../components/ButtonTheme";
import {FaBeer, FaFolder} from 'react-icons/fa';





function Home() {
    const { t} = useTranslation();
    const [colorTheme,setTheme] =useDarkMode();
    return (
        <div className="m-16 grid grid-cols-2 gap-4 ">
            <div className={" bg-red text-black bg-red-500 dark:text-white"}>
                {t("material")}

            </div>
            <div className={"bg-red-500"}>
                <FaBeer className={"text-black text-2xl"}/>
            </div>
        </div>
    );
}

export default Home;
