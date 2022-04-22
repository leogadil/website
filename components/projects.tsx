import React from 'react'

import Image from './image'
import AnimateSection from './animatesection'

type IProjectsProps = {
    delay: number,
    projects?: Array<{
        imglink: string,
        title: string,
        description: string
    }>
}

const Projects: React.FC<IProjectsProps> = ({ delay, projects }) => {

    return (
        <div className="grid sm:grid-cols-2 gap-6 mb-10 grid-cols-1 mx-10">
            {projects && projects.length != 0 ? projects.map((project, index) => {
                return (
                    <ProjectContainer key={index} delay={delay + (index * 0.1)} imglink={project.imglink} title={project.title} description={project.description} />
                )
            }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1">no projects</AnimateSection>}
        </div>
    )
}

type IProjectLayoutProps = {
    children: React.ReactNode
    delay?: number
}

const ProjectLayout: React.FC<IProjectLayoutProps> = ({ children, delay }) => {
    return (
        <AnimateSection className="flex flex-col justify-center items-center" delay={delay}>
            {children}
        </AnimateSection>
    )
}

type IProjectProps = {
    imglink: string,
    title?: string,
    description?: string
    key: number,
    delay?: number
}

const ProjectContainer : React.FC<IProjectProps> = ({imglink, title, description, key, delay }) => {
    return (
        <AnimateSection whileHover={{ scale: 1.05 }} key={key} delay={delay} className="w-full h-26 cursor-pointer flex flex-col items-center">
            <div className="h-26 w-full mb-2">
                <Image className="sm:h-[130px] w-full" imglink={imglink} title={title} description={description} />
            </div>
            <h1 className="font-mplus font-bold">{title}</h1>
            <span className="text-sm text-center text-gray-1">{description}</span>
        </AnimateSection>
    )
}

export default Projects
