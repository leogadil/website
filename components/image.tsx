import React, { useEffect } from 'react'
import Image from 'next/image'
import { IImageProps } from '../lib/types'

const ImageLoader = (src: string) => {
    let srcnew = src.split('-').join('/')
    const projectsLink = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : process.env.REACT_APP_PUBLIC_URL
    console.log(`${projectsLink}/assets/${srcnew}`)
    return `${projectsLink}/assets/${srcnew}`
}

const Image_: React.FC<IImageProps> = ({imglink, imgblur, title, className, relative, ispfp }) => {

    const [isError, setIsError] = React.useState(false)

    const handleError = (e : any) => {
        setIsError(true)
    }

    if(isError) {
        return (
            <div className={className + " rounded-2xl flex flex-col justify-center items-center bg-accent-2 dark:bg-main-accent blur-[1px]"}>
                <h1 className="text-lg font-bold ">Error</h1>
                <h2 className="text-sm">Could not load image</h2>
            </div>
        )
    }

    return (
        <Image className={(ispfp ? "rounded-full " : "rounded-2xl ") + className} blurDataURL={imgblur} src={relative ? imglink : ImageLoader(imglink)} width={ispfp ? 100: 360} height={ispfp ? 100: 220} layout='responsive' alt={title}
            onError={(e) => {
                handleError(e)
            }}
        />
    )
}

export default Image_
