import React from 'react'

import Image_ from './image'
import AnimateSection from './animatesection'
import axios from 'axios'

import { IProjectsProps, IProjectLayoutProps, IProjectProps } from '../lib/types'
import Link from 'next/link'

const Projects: React.FC<IProjectsProps> = ({ delay, projects }) => {

    return (
        <div className="grid sm:grid-cols-2 gap-6 mb-10 grid-cols-1 auto-rows-fr px-8 ">
            {projects && projects.length != 0 ? projects.map((project, index) => {
                return (
                    <ProjectContainer context={project} delay={delay + (index * 0.1)}/>
                )
            }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1">no projects</AnimateSection>}
        </div>
    )
}

const ProjectLayout: React.FC<IProjectLayoutProps> = ({ children, delay }) => {
    return (
        <AnimateSection className="flex flex-col justify-center items-center" delay={delay}>
            {children}
        </AnimateSection>
    )
}

const ProjectContainer : React.FC<IProjectProps> = ({ context, delay }) => {

    return (
        <AnimateSection whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={context.name} delay={delay} className="w-full h-26 cursor-pointer flex flex-col items-center">
            <Link href={'/projects/' + context.slug} scroll={false}>
                <div className='w-full sm:mb-0 mb-10'>
                    <div className=' w-full flex flex-col'>
                        <Image_ imglink={context.cover} title={context.name} />
                    </div>
                    
                    <h1 className="font-mplus font-bold text-center">{context.title}</h1>
                    <div className="text-sm dark:text-gray-1 text-gray-2  text-center">{context.short_description}</div>
                </div>
            </Link>
        </AnimateSection>
    )
}

export default Projects
