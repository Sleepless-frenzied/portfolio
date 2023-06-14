import React, { useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

import ButtonTheme from '../components/ButtonTheme';
import ButtonLang from '../components/ButtonLang';
import { animated, useTransition } from 'react-spring';
import Who from '../components/Who';
import Contacts from '../components/Contacts';
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Studies from '../components/Studies';
import ButtonList from "../components/ButtonList";


interface ButtonPage {
    name: string;
    cmp: JSX.Element;
}

const Home: React.FC = () => {
    const { t } = useTranslation();

    const pages: ButtonPage[] = [
        { name: t('who'), cmp: <Who /> },
        { name: t('contact'), cmp: <Contacts /> },
        { name: t('skills'), cmp: <Skills /> },
        { name: t('Studies'), cmp: <Studies /> },
        { name: t('exp'), cmp: <Experiences /> },
    ];

    const [comp, setComp] = useState(pages[0].name);
    const [showComponent, setShowComponent] = useState(true);

    const transitions = useTransition(showComponent, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
        config: { duration: 400 },
    });

    const activeComponent = pages.find((page) => page.name === comp)?.cmp;

    const handleClick = (pageName: string) => {
        if (pageName !== comp) {
            setShowComponent(false);
            setTimeout(() => {
                setComp(pageName);
                setShowComponent(true);
            }, 400);
        }
    };

    return (
        <div className="relative bg-light dark:bg-dark border-lightDivi dark:border-darkDivi h-full border-8 grid grid-rows-[min-content_1fr] md:grid-rows-1 md:grid-cols-[min-content_1fr] overflow-hidden">
            <div className="p-3 mr-10 flex flex-col">
                <div>
                    <p className="text-2xl md:text-4xl lg:text-4xl 2xl:text-4xl font-bold">Willy Somkhit</p>
                    <br/>
                    <p className={"text-xl md:text-2xl  2xl:text-3xl"}>{t('job')}</p>
                </div>
                <span className="h-8" />

                {pages.map((page) => (
                    <button
                        key={page.name}
                        onClick={() => handleClick(page.name)}
                        className={`w-max  ${
                            page.name === comp ? 'text-red-500' : ''
                        }`}
                    >
                        {page.name === comp ? '.' : page.name}
                    </button>
                ))}
            </div>

            {transitions((styles, item) =>
                item ? (
                    <animated.div
                        className="overflow-y-auto h-full bg-lightModule dark:bg-darkModule"
                        style={styles}
                    >
                        {activeComponent}
                    </animated.div>
                ) : null
            )}


            <div className=" absolute ml-2 mb-1.5 max-md:top-0 max-md:right-0 md:bottom-0 md:left-0 flex flex-row-reverse md:flex-col-reverse gap-2 md:gap-0">

                <div className={"flex flex-col gap-2"}>
                    <ButtonLang/>
                    <ButtonTheme />
                </div>
                <ButtonList/>

            </div>
        </div>
    );
};

export default Home;
