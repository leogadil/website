import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
				<title>Projects</title>
			</Head>
            <CenterTitle text="Projects" />
        </>
    )
}

export default Projects