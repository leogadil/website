import React from 'react'

import { ILinkProps } from '../lib/types'

import { CgLink } from 'react-icons/cg'

const Link: React.FC<ILinkProps> = ({ link, text, className, showLinkIcon }) => {

    const getHostname = (url: string) => {

        if(text) return text

        //check if url is valid or not
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i') // fragment locator
        if(!pattern.test(url)) {
            return url
        }

        try {
            const hostname = new URL(url).hostname
            return hostname
        } catch (error) {
            return ""
        }
    }

    return (
        <span className=''>
            <a href={link ? link : ""} target="_blank" className={"font-bold hover:underline dark:text-main-accent text-accent-2" + className}>{getHostname(text)}</a>
            {showLinkIcon && <CgLink size={20} className={"dark:text-main-accent text-accent-2"} />}
        </span>
    )
}

export default Link