import React from 'react'
import AnimateSection from './animatesection'
import { IHistoryLineProps, IHistoryProps } from '../lib/types'
import Link from 'next/link'
import { BsCaretRightFill } from 'react-icons/bs'

const HistoryLine: React.FC<IHistoryLineProps> = ({ links, delay }) => {

    return (
        <AnimateSection
            delay={delay}
            className="flex flex-row items-center w-full px-8 mb-5"
        >
            {links && links.length != 0 && links.map((link, index) => {

                if (index === links.length - 1) {
                    return (
                        <History title={link.title} url={link.url} end />
                    )
                }

                return (
                    <History title={link.title} url={link.url} />
                )
            })}
        </AnimateSection>
    )
}

const History: React.FC<IHistoryProps> = ({ title, url, end }) => {
    return (
        <>
            <div className='flex flex-row justify-center items-center'>
                {!end ?
                    <Link href={url} scroll={false}>
                        <span className='cursor-pointer hover:underline hover:opacity-100 dark:text-main-accent text-accent-2 break-words opacity-50 transition-all'>{title}</span>
                    </Link> :
                    <span className='break-words opacity-50 hover:opacity-100 cursor-default'>{title}</span>
                }
                {!end && <BsCaretRightFill className='w-5 opacity-50 hover:opacity-100' />}
            </div>
        </>
    )
}

export default HistoryLine
