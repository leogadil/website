import React, { useEffect } from 'react'

import AnimateSection from './animatesection'
import Image_ from './image'

import { IBannerLayoutProps, IIntroductionProps, IWelcomingProps } from '../lib/types'


const BannerLayout: React.FC<IBannerLayoutProps> = ({ delay, isbackgroundOff, children }) => {
    return (
        <>
            <AnimateSection
                delay={delay}
                className="px-8 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <div className={`${!isbackgroundOff && "dark:bg-th-light-dark bg-th-light-light"} w-full rounded-md px-4 py-3 flex sm:flex-row flex-col-reverse duration-600 ease-in-out cursor-pointer`}>
                    {children}
                </div>
            </AnimateSection>
            {/* A dirty fix. will come back here later */}
            <div className='mb-10'></div>
        </>
    )
}



const Introduction: React.FC<IIntroductionProps> = ({ delay }) => {

    return (
        <BannerLayout delay={delay} isbackgroundOff>
            <div className="flex flex-row justify-center pb-1">
                <div className="sm:mr-5 w-36 mt-5 sm:mt-0 bg-accent-2 dark:bg-main-accent rounded-full p-1">
                    <Image_ relative ispfp imglink="/profilepic.jpg" title="profile" />
                </div>
            </div>
            <div className="flex-1 flex flex-col sm:text-right text-center justify-center">
                <h1 className="text-3xl font-bold antialiased tracking-wider font-mplus leading-none break- transition-colors duration-100 dark:duration-100">Jann Leo Gadil</h1>
                <h2 className="text-2xl font-bold antialiased tracking-widest font-kaushan leading-[.01em] text-accent-2 dark:text-main-accent">Software Developer</h2>
            </div>
        </BannerLayout>
    )
}


const Welcoming: React.FC<IWelcomingProps> = ({ delay }) => {

    return (
        <BannerLayout delay={delay}>
            <div className="flex-1 flex flex-row justify-center">
                <span className="dark:text-gray-1 text-gray-2">I am glad to see you here.</span>
            </div>
        </BannerLayout>
    )
}

export { Introduction, Welcoming }