import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'

const Blogs: NextPage = () => {
    return (
        <>
            <Head>
				<title>Blogs</title>
			</Head>
            <CenterTitle text="Blogs" />
        </>
    )
}

export default Blogs