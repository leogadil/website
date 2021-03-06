import React, { useEffect } from 'react'

import AnimateSection from './animatesection'

import { IDescriptionProps } from '../lib/types'

const Description: React.FC<IDescriptionProps> = ({ title, description, delay, isindented }) => {

	return (
		<AnimateSection
			delay={delay}
			className="grid sm:grid-cols-3 gap-2 grid-rows-2s mb-5 px-8 w-full">
			<div className="text-left">
				<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-widest">
					{title}
				</span>
				<div className="w-10 sm:w-32 mb-2 h-1 rounded bg-accent-2 dark:bg-main-accent">
				</div>
			</div>
			<div className="col-span-2 break-words text-justify">
				{description.map((desc, i) => {
					if (i < description.length - 1) {
						return (
							<p className={"text-justify mb-3 " + (isindented && "indent-8 sm:indent-8")}>
								{desc}
							</p>
						)
					} else {
						return (
							<p className={"text-justify" + (isindented && "indent-8 sm:indent-8")}>
								{desc}
							</p>
						)
					}

				})}
			</div>
		</AnimateSection>
	)
}

export default Description