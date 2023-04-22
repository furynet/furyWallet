import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import Icon from "../Icon";

const socialList = [
    {
        url: 'https://twitter.com/GridironOne',
        iconName: 'twitter-logo',
        tooltip: 'twitter'
    },
    {
        url: 'https://t.me/GridironOneChat',
        iconName: 'telegram-plane',
        tooltip: 'telegram'
    },
    {
        url: 'https://t.me/GridironOne',
        iconName: 'announcements',
        tooltip: 'announcements'
    }, {
        url: 'https://discord.gg/SaBKpjbnhH',
        iconName: 'discord',
        tooltip: 'discord'
    }, {
        url: 'https://www.reddit.com/r/GridironOne/',
        iconName: 'reddit-round',
        tooltip: 'reddit'
    }, {
        url: 'https://www.youtube.com/channel/UC5wqI1ZRdkCjWWVOCQdhxLQ/featured',
        iconName: 'youtube',
        tooltip: 'youtube'
    }, {
        url: 'https://medium.com/gridiron-blog',
        iconName: 'medium-m',
        tooltip: 'medium'
    }, {
        url: 'https://www.linkedin.com/company/gridironone/',
        iconName: 'linkedin-footer',
        tooltip: 'linkedIn'
    },
];

const Footer = () => {

    return (
        <>
            <section className="contact-section">
                <div className="container">

                </div>
            </section>
            <footer className="footer">
                <div className="footer-bottom-section">
                    <div className="footer-logo-section container ">
                        <p className="copy-rights mb-sm-0">Developed by Gridiron</p>

                        <div className="social-links-section">
                            <ul className="list-unstyled footer-list">
                                {
                                    socialList.map((item, index) => (
                                        <OverlayTrigger
                                            key={index}
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id={`tooltip-${item.iconName}}`}>
                                                    {item.tooltip}
                                                </Tooltip>
                                            }
                                        >
                                            <a href={item.url} rel="noopener noreferrer"
                                                target="_blank"><Icon viewClass="social_icon_imgg"
                                                    icon={item.iconName}/></a>
                                        </OverlayTrigger>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};


export default Footer;
