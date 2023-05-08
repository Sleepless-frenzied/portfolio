import React, {useEffect, useState} from "react";
import {RxMoon} from "react-icons/rx";
import {GiSun} from "react-icons/gi";




function useDarkMode(){
    const [theme,setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    useEffect(()=>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme',theme);
    }, [theme,colorTheme]);

    return [colorTheme,setTheme] as const;
}

const ButtonTheme = (props:any) => {
    const [colorTheme,setTheme] =useDarkMode();
    return (
        <button onClick={()=> setTheme(colorTheme)} className={""}>

            {props.children}
            {colorTheme === 'light'?
                (<RxMoon size={25}/>) :
                (<GiSun size={25} className={"text-dark"}/>)}

            {props.children}
        </button>
    )
}

export default ButtonTheme