import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

interface ButtonItem {
    id: number;
    text: string;
}

const ButtonList = (props:any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const buttonList: ButtonItem[] = [
        { id: 1, text: 'Bouton 1' },
        { id: 2, text: 'Bouton 2' },
        { id: 3, text: 'Bouton 3' },
    ];

    const transitions = useTransition<ButtonItem, any>(isOpen ? buttonList : [], {
        key: (item:any) => item.id,
        from: { opacity: 0, transform: 'translateY(-20px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        leave: { opacity: 0, transform: 'translateY(-20px)' },
        config: { tension: 220, friction: 22 },
        trail: 150, // Adjust this value to control the delay between each button
    });

    return (
        <div className="button-list">
            <button className="main-button" onClick={toggleList}>
                Afficher la liste
            </button>
            <div className="button-list-items flex flex-col ">
                {transitions((style, item) => (
                    <animated.button className="list-button" style={style} key={item.id}>
                        {item.text}
                    </animated.button>
                ))}
            </div>
        </div>
    );
}

export default ButtonList