import React from 'react'

import AnimateSection from './animatesection'

type IFooterProps = {
    delay: number
}

const Footer : React.FC<IFooterProps> = ({ delay }) => {

    // get current year
    const year = new Date().getFullYear()

    return (
        <AnimateSection delay={delay} className="w-full px-3">
			<div className="p-2 max-w-3xl mx-auto flex flex-col justify-center text-center pb-6">
				<div className="w-full bg-gray-2 h-[.5px] mt-4 mb-6"></div>
                <h1 className="text-gray-1 text-sm">Copyright &copy; {year} LeoGadil. All Rights Reserved</h1>
			</div>
		</AnimateSection>
    )
}

export default Footer