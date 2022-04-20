import React from 'react'
import { motion } from 'framer-motion'

import AnimateSection from './animatesection'

type IBannerLayoutProps = {
    delay?: number
    children?: React.ReactNode
}

const BannerLayout : React.FC<IBannerLayoutProps> = ({ delay, children }) => {
    return (
        <AnimateSection
            delay={delay}
            className="px-10 w-full">
            <motion.div exit={{opacity: 0}} className="dark:bg-th-light-dark bg-th-light-light w-full rounded-md mb-10 px-4 py-3 flex sm:flex-row flex-col-reverse transition-transform hover:scale-105 duration-600 ease-in-out cursor-pointer">
                {children}
            </motion.div>
        </AnimateSection>
    )
}

const Introduction : React.FC = () => {
    return (
        <BannerLayout delay={0}>
            <div className="flex flex-row justify-center">
                <div className="sm:mr-5 w-20 mt-5 sm:mt-0 bg-accent-2 dark:bg-main-accent rounded-full p-0.5">
                    <img className='w-20 h-auto m-auto rounded-full' src="/profilepic.jpg" alt="profile" />
                </div>
            </div>
            <div className="flex-1 flex flex-col sm:text-right text-center justify-center">
                <h1 className="text-3xl font-bold antialiased tracking-wider font-mplus leading-none">Jann Leo Gadil</h1>
                <h2 className="text-2xl font-bold antialiased tracking-widest font-caveat leading-[.01em] text-accent-2 dark:text-main-accent">A Full-stack Developer</h2>
            </div>
        </BannerLayout>
    )
}

const Welcoming : React.FC = () => {
    return (
        <BannerLayout delay={0.2}>
            <div className="flex-1 flex flex-row justify-center">
                <span className="dark:text-gray-1 text-gray-2">I am glad to see you here.</span>
            </div>
        </BannerLayout>
    )
}

export {Introduction, Welcoming}