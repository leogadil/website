import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
				<title>Projects</title>
			</Head>
            <CenterTitle text="Projects" delay={0.1} />
            <Footer delay={0.2}/>
        </>
    )
}

export default Projects