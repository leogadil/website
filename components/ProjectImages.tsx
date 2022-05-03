import React from 'react'
import { IProjectImageItemProps, IProjectImagesProps } from '../lib/types'
import AnimateSection from './animatesection'
import Image from './image'

const ProjectImages : React.FC<IProjectImagesProps> = ({ images, delay }) => {
    return (
        <>
            <div className="w-full px-8">
                {images && images.length != 0 ? images.map((image: string, index: any) => {
                    return (
                        <ProjectImage src={image} key={index} delay={delay ? delay + (index * 0.1) : delay}/>
                    )
                }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1"></AnimateSection>}
            </div>
        </>
    )
}

const ProjectImage : React.FC<IProjectImageItemProps> = ({ src, delay, key }) => {

    console.log(src)

    return (
        <>
            <AnimateSection 
                className='w-full overflow-hidden mb-5 cursor-pointer' 
                delay={delay}
                whileHover={{ scale: 1.02 }}>
                <Image imglink={src} title={"img"} />
            </AnimateSection>
        </>
    )
}

export default ProjectImages