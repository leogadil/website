import React from 'react'

import { ILinkProps } from '../lib/types'

import { CgLink } from 'react-icons/cg'

const Link: React.FC<ILinkProps> = ({ link, text, className, showLinkIcon }) => {
    return (
        <span className=''>
            <a href={link ? link : ""} target="_blank" className={"font-bold hover:underline dark:text-main-accent text-accent-2 break-words " + className}>{text}</a>
            {showLinkIcon && <CgLink size={20} className={"dark:text-main-accent text-accent-2"} />}
        </span>
    )
}

export default Link