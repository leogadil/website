import React from 'react'

import { ILinkProps } from '../lib/types'

const Link : React.FC<ILinkProps> = ({link, text, className}) => {
    return (
        <a href={link ? link : ""} target="_blank" className={"font-bold hover:underline dark:text-main-accent text-accent-2 break-words " + className}>{text}</a>
    )
}

export default Link