import {ChevronDown, Instagram, Facebook, Copyright,} from "lucide-react";
import React from "react";

const socialLinks = [,
    { track: "instagram", href: "https://www.instagram.com/discord/", alt: "Instagram", icon: Instagram },
    { track: "facebook", href: "https://www.facebook.com/discord/", alt: "Facebook", icon: Facebook },
];

export default function footer (){
    return (
        <div
            className="h-[150px] w-screen bg-gradient-to-t from-[#5865F2] to-[#19175c] to-150% flex flex-col-reverse md:flex-row justify-between p-8 items-center">
            <p className="flex flex-row items-center text-white font-[400] text-[18px]">
                <Copyright className="w-5 h-5"/>
                <span className="ml-2">Cameron Thrap</span>
            </p>
            <div className="flex">
                {socialLinks.map((social) => {
                    if (social) {
                        const Icon = social.icon; // grab the component
                        return (
                            <div key={social.href} className="px-2">
                                <a
                                    key={social.track}
                                    data-track={social.track}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <Icon color="white" className="w-7 h-7" aria-label={social.alt}/>
                                </a>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}