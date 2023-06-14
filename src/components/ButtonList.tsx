import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import {
    EmailShareButton,
    FacebookMessengerShareButton,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from 'react-share';
import {FaFacebookMessenger, FaInstagram, FaLink, FaMailBulk, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi';




interface ButtonItem {
    id: number;
    icon: React.ReactElement;
}

interface ShareableItem extends ButtonItem {
    title: string;
    description: string;
}

const ButtonList = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const shareUrl = window.location.href;
    const title = 'GitHub';
    const size = 32;

    const buttonList: (ButtonItem | ShareableItem)[] = [
        { id: 0,
            icon:
                <FaLink size={size} onClick={() => {navigator.clipboard.writeText(shareUrl)}}/>},
        { id: 1,
            icon:
                <WhatsappShareButton
                    url={shareUrl}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                >
                    <FaWhatsapp  size={size}  />
                </WhatsappShareButton>},
        { id: 2,
            icon:
                <EmailShareButton
                    url={shareUrl}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button"
                >
                    <FaMailBulk size={size} />
                </EmailShareButton>},
        { id: 3,
            icon:
                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId="521270401588372"
                    className="Demo__some-network__share-button">
                    <FaFacebookMessenger size={size} />
                </FacebookMessengerShareButton> },
        { id: 4,
            icon:
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                >
                    <FaTwitter size={size} />
                </TwitterShareButton>},
    ];

    const transitions = useTransition<ButtonItem | ShareableItem, any>(
        isOpen ? buttonList : [],
        {
            key: (item: any) => item.id,
            from: { opacity: 0, transform: 'translateY(-20px)' },
            enter: { opacity: 1, transform: 'translateY(0px)' },
            leave: { opacity: 0, transform: 'translateY(-20px)' },
            config: { tension: 220, friction: 22 },
            trail: 150, // Adjust this value to control the delay between each button
        }
    );

    const handleShare = (text: string) => {
        // Handle the share action here
        console.log('Sharing:', text);
    };

    return (
        <div className="relative">
            <button className="main-button " onClick={toggleList}>
                <HiOutlineDotsCircleHorizontal size={size}/>
            </button>
            {isOpen?
                <div className={`flex flex-col ${isOpen?'':'invisible'}`}>
                    {transitions((style, item) => (
                        <animated.div style={style} key={item.id}>
                            <animated.button className="list-button" onClick={()=>{
                                setIsOpen(false);
                            }}>
                                {item.icon}
                            </animated.button>
                            {/*item.hasOwnProperty('icon') ? (
                            <animated.button className="list-button">
                                {item.icon}
                            </animated.button>
                        ) : (
                            <animated.div className="other-item">
                                <h3>{(item as ShareableItem).title}</h3>
                                <p>{(item as ShareableItem).description}</p>
                            </animated.div>
                        )*/}
                            {/*item.hasOwnProperty('title') && (
                            <div>
                                <FacebookShareButton
                                    url={window.location.href}
                                    quote={(item as ShareableItem).title}
                                    onClick={() => handleShare((item as ShareableItem).title)}
                                >
                                    <RiFacebookFill size={20} />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={window.location.href}
                                    title={(item as ShareableItem).title}
                                    onClick={() => handleShare((item as ShareableItem).title)}
                                >
                                    <RiTwitterFill size={20} />
                                </TwitterShareButton>
                            </div>
                        )*/}
                        </animated.div>
                    ))}
                </div>:null
            }
        </div>
    );
};

export default ButtonList;
