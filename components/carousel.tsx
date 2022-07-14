import React from 'react'
import { SiPython } from 'react-icons/si'
import { ICarouselItemProps, ICarouselProps } from '../lib/types'
import AnimateSection from './animatesection'
import Link from './link'

const certs = [
    {
        name: 'Learn Basic Statistics with Python',
        link: 'https://courses.buri.io/view/user/certificate/0cbde3ca-56b1-4128-ae39-c4a84fe42f7e/html/',
        from: 'DICT',
        icon: SiPython,
    },
    {
        name: 'Analyze Data with Python',
        link: 'https://courses.buri.io/view/user/certificate/a42693e1-ab85-47e2-aedf-cb7e18463416/html/',
        from: 'DICT',
        icon: SiPython,
    },
    {
        name: 'Visualize Data with Python',
        link: 'https://courses.buri.io/view/user/certificate/ca816fa4-55de-4394-a41f-d06b3ce26b73/html/',
        from: 'DICT',
        icon: SiPython,
    }
]

const Carousel: React.FC<ICarouselProps> = ({ delay }) => {
    return (
        <>
            <AnimateSection delay={delay}>
                <div className='grid sm:grid-cols-3 gap-6 sm:gap-12 grid-cols-2'>
                    {
                        certs.map((cert: ICarouselItemProps) => {
                            return (
                                <CarouselItem name={cert.name} link={cert.link} from={cert.from} icon={cert.icon} />
                            )
                        })
                    }
                </div>
                <div className='mb-10'></div>
            </AnimateSection>
        </>
    )
}

const CarouselItem: React.FC<ICarouselItemProps> = ({ name, link, from, icon }) => {
    return (
        <div className='goldcertificate py-2 rounded-xl flex flex-col drop-shadow-2xl sm:w-[175px] sm:h-[175px] w-[135px] h-[175px]'>
            <div className='flex flex-col justify-center items-center mb-1'>
                {React.createElement(icon, {className:"text-white-1 dark:text-white-1 "})}
            </div>
            <span className='text-sm pl-4 opacity-75 drop-shadow-lg text-white-1 dark:text-white-1'>certificate</span>
            <div className='px-4 flex flex-col justify-between h-full mt-1'>
                <h1 className='font-bold text-lg drop-shadow-lg leading-5 text-white-1 dark:text-white-1'>{name}</h1>
                <div className='flex flex-col items-left justify-between'>
                    <h2 className='text-sm font-mplus drop-shadow-lg text-white-1 dark:text-white-1 mb-1'>{from}</h2>
                    <div className='sm:text-right'>
                        <Link link={link} text={`view certificate`} className='text-white-1 dark:text-white-1 text-sm drop-shadow-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Carousel }