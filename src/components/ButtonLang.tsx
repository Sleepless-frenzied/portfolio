import React from 'react'
import i18n from "i18next";
import en_flag from "../assets/img/en_flag.png";
import fr_flag from "../assets/img/fr_flag.png";


import cookies from 'js-cookie';


let lang = 'fr';
let flag = cookies.get('i18next') === 'fr' ? fr_flag : en_flag;
const handleTrans = () => {
    lang =  cookies.get('i18next') === 'fr' ? 'en' : 'fr' ;
    flag = cookies.get('i18next') === 'fr' ? en_flag : fr_flag;

    i18n.changeLanguage(lang);
    window.location.reload();

};

const ButtonLang = (props:any) => {
    return (
        <button onClick={handleTrans} className=' rounded-full text-white py-1 px-0.5 rounded duration-500'>
            {props.children}
            <img src={flag} alt="change language "
                 className="w-6 h-6 p-0 m-0  rounded-full ring-blue-500 ring-2 grayscale"/>
        </button>
    )
}

export default ButtonLang