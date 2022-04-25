import React from 'react'
import Head from 'next/head'

import { IHeadProps } from '../lib/types'

const HeadMeta : React.FC<IHeadProps> = ({ title, description, image, url }) => {
    return (
        <Head>
            <title>{"Leogadil Portfolio - " + title}</title>
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
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta property="og:image"  content="/preview.svg" />
            <meta property="og:title"  content={"Leogadil Portfolio - " + title} />
            <meta property="og:description"  content={description ? description : "I'm a software engineer and a web developer."} />
            <meta property="og:url"  content={url ? url : "https://leogadil.com"} />
            <meta name="msapplication-TileColor" content="#D85C27" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="theme-color" content="#D85C27" />
        </Head>
    )
}

export default HeadMeta