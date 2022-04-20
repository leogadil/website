import React from 'react'

import AnimateSection from './animatesection'

type ICenterTitleProps = {
    text: string
}

const CenterTitle: React.FC<ICenterTitleProps> = ({ text }) => {
    return (
        <AnimateSection 
            delay={0.1}
        >
            <h1 className="text-2xl font-bold font-mplus">{text}</h1>
        </AnimateSection>
    )
}

export default CenterTitle