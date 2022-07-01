import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'
import Blogs from '../../components/blogs'
import HeadMeta from '../../components/head'

const BlogsPage: NextPage = () => {

    const blogs : Array<{
            imglink: string,
            title: string,
            description: string
        }> = [
    ]

    return (
        <>
            <HeadMeta title="Blog Posts"/>
            <CenterTitle text="Blogs" delay={0.1} />
            <Blogs delay={0.2} blogs={blogs} />
            <Footer delay={blogs.length != 0 ? (blogs.length * 0.1) + 0.2 : 0.3}/>
        </>
    )
}

export default BlogsPage