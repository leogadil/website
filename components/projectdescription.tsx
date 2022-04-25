import React, { useEffect } from 'react'

import AnimateSection from './animatesection'

import { IProjectDescriptionProps } from '../lib/types'

const ProjectDescription: React.FC<IProjectDescriptionProps> = ({ value, delay }) => {

	return (
		<AnimateSection
			delay={delay}
			className="mb-5 px-8 w-full">
			<p className='text-justify indent-10'>{value}</p>
		</AnimateSection>
	)
}

export default ProjectDescription