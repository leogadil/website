import React from 'react'

import Image from './image'
import AnimateSection from './animatesection'

type IBlogsProps = {
    delay: number,
    blogs?: Array<{
        imglink: string,
        title: string,
        description: string
    }>
}

const Blogs: React.FC<IBlogsProps> = ({ delay, blogs }) => {

    return (
        <div className="grid sm:grid-cols-2 gap-6 mb-10 grid-cols-1">
            {blogs && blogs.length != 0 ? blogs.map((blog, index) => {
                return (
                    <BlogsContainer key={index} delay={delay + (index * 0.1)} imglink={blog.imglink} title={blog.title} description={blog.description} />
                )
            }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1">no blogs post yet.</AnimateSection>}
        </div>
    )
}

type IBlogsLayoutProps = {
    children: React.ReactNode
    delay?: number
}

const BlogsLayout: React.FC<IBlogsLayoutProps> = ({ children, delay }) => {
    return (
        <AnimateSection className="flex flex-col justify-center items-center" delay={delay}>
            {children}
        </AnimateSection>
    )
}

type IBlogProps = {
    imglink: string,
    title?: string,
    description?: string
    key: number,
    delay?: number
}

const BlogsContainer : React.FC<IBlogProps> = ({imglink, title, description, key, delay }) => {
    return (
        <AnimateSection whileHover={{ scale: 1.05 }} key={key} delay={delay} className="w-full h-26 cursor-pointer flex flex-col items-center">
            <div className="h-26 w-full mb-2">
                <Image className="sm:h-[130px] w-full" imglink={imglink} title={title} description={description} />
            </div>
            <h1 className="font-mplus font-bold">{title}</h1>
            <span className="text-sm text-center text-gray-1">{description}</span>
        </AnimateSection>
    )
}

export default Blogs
