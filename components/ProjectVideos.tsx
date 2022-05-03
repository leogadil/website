import React from 'react'
import { IProjectVideoItemProps, IProjectVideosProps, Url } from '../lib/types'
import AnimateSection from './animatesection'
import YouTube, { YouTubeProps } from 'react-youtube'

const ProjectVideos : React.FC<IProjectVideosProps> = ({ videos, delay }) => {
    return (
        <>
            <div className="w-full px-8">
                {videos && videos.length != 0 ? videos.map((video : Url , index) => {
                    return (
                        <ProjectVideo url={video.url} title={video.title} key={index} delay={delay ? delay + (index * 0.1) : delay}/>
                    )
                }) : <AnimateSection delay={delay} className="col-span-2 text-gray-1"></AnimateSection>}
            </div>
        </>
    )
}

const ProjectVideo : React.FC<IProjectVideoItemProps> = ({ url, delay, key, title }) => {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const ytid = url.split('.be/')[1]
    return (
        <>
            <AnimateSection 
                className='w-full overflow-hidden mb-5 cursor-pointer' 
                delay={delay}
                whileHover={{ scale: 1.02 }}>
                <YouTube
                    videoId={ytid}
                    title={title}
                    key={key}
                    className='w-full h-[252px] rounded-2xl overflow-hidden'
                    opts={{
                        height: '100%',
                        width: '100%',
                    }}
                    onReady={onPlayerReady}

                />
            </AnimateSection>
        </>
    )
}

export default ProjectVideos