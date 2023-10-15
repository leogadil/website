import React, { useEffect } from 'react'

import AnimateSection from './animatesection'
import Link from './link'

import { IProjectLinksProps, Url } from '../lib/types'

const ProjectLinks : React.FC<IProjectLinksProps> = ({ url, delay }) => {

    return (
        <div className="w-full px-8">
            {url && url.length != 0 ? url.map((url: { title: string; url: any }, index: any) => {
                return (
                    <LinkItem title={url.title} url={url.url} key={index} delay={delay ? delay + (index * 0.1) : delay}/>
                )
            }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1"></AnimateSection>}
        </div>
    )
}

const LinkItem : React.FC<Url> = ({ title, url, key, delay }) => {
    return (
        <AnimateSection className=" w-full px-8 mb-5 grid grid-cols-4" key={key} delay={delay}>
            <div className=" text-sm font-mplus font-bold dark:text-main-accent text-accent-2">{title}</div>
            <Link link={url} text={url} className="col-span-3 text-sm font-normal" />
        </AnimateSection>
    )
}

export default ProjectLinks