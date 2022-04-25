import React from 'react'

import AnimateSection from './animatesection'

import { ICenterTitleProps } from '../lib/types'

const LeftTitle: React.FC<ICenterTitleProps> = ({ text, delay }) => {
    return (
        <AnimateSection 
            delay={delay}
            className="mb-5 w-full px-8"
        >
            <h1 className="text-4xl font-bold font-mplus tracking-wide">{text}</h1>
        </AnimateSection>
    )
}

export default LeftTitle