import React, { useEffect } from 'react'
import Link from 'next/link'

import AnimateSection from './animatesection'

import { IProjectPropertiesProps, Property } from '../lib/types'

const ProjectProerties : React.FC<IProjectPropertiesProps> = ({ properties, delay }) => {

    return (
        <div className="w-full px-8">
            {properties && properties.length != 0 ? properties.map((property: { title: string; value: any }, index: any) => {
                return (
                    <PropertyItem title={property.title} value={property.value} key={index} delay={delay ? delay + (index * 0.1) : delay}/>
                )
            }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1"></AnimateSection>}
        </div>
    )
}

const PropertyItem : React.FC<Property> = ({ title, value, key, delay }) => {
    return (
        <AnimateSection className=" w-full px-8 mb-5 grid grid-cols-4" key={key} delay={delay}>
            <div className="text-special-1 text-sm font-mplus font-bold">{title}</div>
            <div className="dark:text-gray-1 text-gray-2 text-sm col-span-3">{value}</div>
        </AnimateSection>
    )
}

export default ProjectProerties