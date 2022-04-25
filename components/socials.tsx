import React, { useEffect } from 'react'
import Link from 'next/link'
import AnimateSection from './animatesection'

import { SiYoutube, SiTwitter, SiFacebook, SiGithub } from 'react-icons/si';

import { ISocialsProps, ISocialItemProps } from '../lib/types'

const Socials: React.FC<ISocialsProps> = ({delay}) => {

    const socials = [
        {
            "icon": SiYoutube,
            "href": "https://www.youtube.com/channel/UC3-bDRXhdrXA03iMMwSusXQ",
            "name": "@Jann Leo Gadil"
        },
        {
            "icon": SiTwitter,
            "href": "https://twitter.com/leogaddd",
            "name": "@leogaddd"
        },
        {
            "icon": SiFacebook,
            "href": "https://www.facebook.com/themightyguyoftheworld",
            "name": "@themightyguyoftheworld"
        },
        {
            "icon": SiGithub,
            "href": "https://www.facebook.com/themightyguyoftheworld",
            "name": "@leogadil"
        }
    ]

    return (
        <AnimateSection 
            delay={delay} 
            className="grid sm:grid-cols-3 gap-2 grid-rows-2s mb-5 px-8 w-full">
            <div className="text-left">
				<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-wider">
					On the Web
				</span>
				<div className="w-10 sm:w-32 mb-2 h-1 rounded bg-accent-2 dark:bg-main-accent">
				</div>
			</div>
            <div className="flex flex-col col-span-2">
                {socials.map((soc, _) => {
                    console.log(soc.icon)
                    return (
                        <SocialItem 
                            Icon={soc.icon} 
                            name={soc.name} 
                            href={soc.href}
                            islast={_ === socials.length - 1}
                        />
                    )
                })}
            </div>
        </AnimateSection>
    )
}


const SocialItem: React.FC<ISocialItemProps> = ({ Icon, href, name, islast }) => {
    return (
        <Link href={href}>
            <button key={name} className={"dark:hover:bg-main-accent-half hover:bg-accent-2-half p-1 px-4 pl-4 pb-[.5em] rounded flex flex-row items-center w-max transition-colors " + (!islast && ' mb-1')}>
                <Icon size="1em" className="dark:text-special-1 text-special-2 mt-[1px]" />
                <h1 className="dark:text-special-1 text-special-2 font-mplus font-bold ml-3">{name}</h1>
            </button>
        </Link>
    )
}

export { Socials, SocialItem }

