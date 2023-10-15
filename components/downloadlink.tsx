import React, { useEffect } from 'react'
import AnimateSection from './animatesection'

import { FaAngleRight } from 'react-icons/fa'

import { IDownloadLinkProps } from '../lib/types'


const DownloadLink: React.FC<IDownloadLinkProps> = ({ text, type, filename, url, delay }) => {

	const downloadFile = () => {
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		link.type = type;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<AnimateSection delay={delay}>
			<button onClick={downloadFile} className={"bg-accent-2 dark:bg-main-accent mb-5 p-2 px-3 text-th-light rounded flex flex-row justify-center items-center hover:bg-accent-2-light hover:dark:bg-main-accent-hover transition-colors"}>
				<span>{text}</span>
				<FaAngleRight className="ml-1 mt-[3.5px] text-th-light" />
			</button>
		</AnimateSection>
	)
}

export default DownloadLink