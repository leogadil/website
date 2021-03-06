import React from 'react'

import AnimateSection from './animatesection'

import { ICenterTitleProps } from '../lib/types'

const CenterTitle: React.FC<ICenterTitleProps> = ({ text, delay }) => {
    return (
        <AnimateSection 
            delay={delay}
            className="mb-10"
        >
            <h1 className="text-2xl font-bold font-mplus">{text}</h1>
        </AnimateSection>
    )
}

export default CenterTitle