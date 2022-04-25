import React, { useEffect } from 'react'

import AnimateSection from './animatesection'
import Link from './link'

import { IFooterProps } from '../lib/types'

const Footer : React.FC<IFooterProps> = ({ delay }) => {

    // get current year
    const year = new Date().getFullYear()

    return (
        <AnimateSection delay={delay} className="w-full px-3">
			<div className="p-2 max-w-3xl mx-auto flex flex-col justify-center text-center pb-6">
				<div className="w-full bg-gray-2 h-[.5px] mt-4 mb-6"></div>
                <h1 className="text-gray-1 text-sm">Copyright &copy; {year} LeoGadil. All Rights Reserved</h1>
                <h1 className="text-gray-1 text-sm mb-2">email: <span className="cursor-pointer font-bold dark:text-main-accent text-accent-2 break-words">jann@leogadil.com</span></h1>
                <h1 className="text-gray-1 text-sm">heavily inspired by <Link link="https://www.craftz.dog/" text='craftz.dog' /></h1>
			</div>
		</AnimateSection>
    )
}

export default Footer