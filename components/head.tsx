import React from 'react'
import Head from 'next/head'

type IHeadProps = {
    title: string,
    description?: string,
    image?: string,
    url?: string
}

const HeadMeta : React.FC<IHeadProps> = ({ title, description, image, url }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta 
                name="description" 
                content={description ? description : "I'm a software engineer and a web developer."}
            />
            <meta
                name="keywords"
                content="jann leo gadil, leo gadil, full stack developer, jarvis, programmer, freelancer, manila, cainta, philippines, leogaddd, sti college, themightyguyoftheworld, portfolio, work"
            />
            <meta name="author" content="Jann Leo Gadil" />
            <meta name="copyright" content="Jann Leo Gadil" />
            <meta name="robots" content="follow"/>
            <meta property="og:image"  content="/preview.svg" />
        </Head>
    )
}

export default HeadMeta