import React from 'react'

type ILink = {
    link?: string,
    text: string
}

const Link : React.FC<ILink> = ({link, text}) => {
    return (
        <a href={link ? link : ""} target="_blank" className="font-bold hover:underline dark:text-main-accent text-accent-2 break-words">{text}</a>
    )
}

export default Link