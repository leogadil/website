import React from 'react'
import Link from 'next/link'

import AnimateSection from './animatesection'

import { FaAngleRight } from 'react-icons/fa'

type IButtonLinkProps = {
    text: string,
    url: string,
    delay?: number
}

const ButtonLink : React.FC<IButtonLinkProps> = ({ text, url, delay }) => {
    return (
        <AnimateSection delay={delay}>
            <Link href={url} scroll={false}>
                <button className={"bg-accent-2 dark:bg-main-accent mb-5 p-2 px-3 text-th-light rounded flex flex-row justify-center items-center hover:bg-accent-2-light hover:dark:bg-main-accent-hover transition-colors"}>
                    <span>{text}</span>
                    <FaAngleRight className="ml-1 mt-[3.5px] text-th-light" />
                </button>
            </Link>
        </AnimateSection>
    )
}

export default ButtonLink