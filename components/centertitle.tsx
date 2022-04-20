import React from 'react'

import AnimateSection from './animatesection'

type ICenterTitleProps = {
    text: string,
    delay?: number
}

const CenterTitle: React.FC<ICenterTitleProps> = ({ text, delay }) => {
    return (
        <AnimateSection 
            delay={delay}
        >
            <h1 className="text-2xl font-bold font-mplus">{text}</h1>
        </AnimateSection>
    )
}

export default CenterTitle