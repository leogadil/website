import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'

const Blogs: NextPage = () => {
    return (
        <>
            <Head>
				<title>Blogs</title>
			</Head>
            <CenterTitle text="Blogs" delay={0.1} />
            <Footer delay={0.2}/>
        </>
    )
}

export default Blogs