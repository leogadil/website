import axios from 'axios'
import type { NextPage } from 'next'
import React from 'react'
import HeadMeta from '../../components/head'
import HistoryLine from '../../components/historyline'
import Footer from '../../components/footer'
import LeftTitle from '../../components/lefttitle'
import ProjectDescription from '../../components/projectdescription'
import ProjectProperties from '../../components/projectproperties'
import ProjectLinks from '../../components/projectlinks'
import ProjectImages from '../../components/ProjectImages'
import ProjectVideos from '../../components/ProjectVideos'
import _404 from '../404'
import { APIData, Data } from '../../lib/types'
import DownloadLink from '../../components/downloadlink'

const DownloadLinkLoader = (src: string) => {
    let srcnew = src.split('-').join('/')
    const projectsLink = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : process.env.PUBLIC_URL
    return `${projectsLink}/assets/${srcnew}`
}

const ProjectData: NextPage<Data> = (props) => {

    const history = [
        {
            title: 'Projects',
            url: '/projects',
        },
        {
            title: props.title,
            url: `/projects/${props.slug}`,
        }
    ]

    if(props.error) {
        return <_404 reason='cant find the project you were looking for.'/>
    }

    return (
        <>
            <HeadMeta title={props.title} />
            <HistoryLine
                delay={0.1}
                links={history}
            />
            <LeftTitle text={props.title} delay={0.2} />
            <ProjectDescription value={[props.description]} delay={0.3} />
            {props.properties && props.properties.length > 0 && <ProjectProperties properties={props.properties} delay={0.4} />}
            {props.links && props.links.length > 0 && <ProjectLinks url={props.links}
                delay={0.4 + (props.properties ? props.properties?.length * 0.1 : 0.0)} />}
            {props.download && <DownloadLink text={props.download.text} type={props.download.type} filename={props.download.filename} url={DownloadLinkLoader(props.download.url)} delay={0.4 + 
                (props.properties ? props.properties?.length * 0.1 : 0.0) +
                (props.links ? props.links?.length * 0.1 : 0.0)} />}
            {props.images && props.images.length > 0 && <ProjectImages images={props.images} 
                delay={0.4 + 
                (props.properties ? props.properties?.length * 0.1 : 0.0) +
                (props.download ? 0.1 : 0.0) +
                (props.links ? props.links?.length * 0.1 : 0.0)} />}
            {props.videos && props.videos?.length > 0 && <ProjectVideos videos={props.videos}
                delay={0.4 +
                (props.properties ? props.properties?.length * 0.1 : 0.0) +
                (props.download ? 0.1 : 0.0) +
                (props.links ? props.links?.length * 0.1 : 0.0) + 
                (props.images ? props.images?.length * 0.1 : 0.0)} />}
            <Footer delay={
                0.4 +
                (props.properties ? props.properties?.length * 0.1 : 0.1) +
                (props.download ? 0.1 : 0.0) +
                (props.links ? props.links?.length * 0.1 : 0.1) + 
                (props.images ? props.images?.length * 0.1 : 0.1) + 
                (props.videos ? props.videos?.length * 0.1 : 0.1)
            } />
        </>
    )
}

export async function getServerSideProps(context: any) {

    const projectsLink = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/projects.json' : process.env.PUBLIC_URL + '/projects.json'

    const selectedProjectData = axios({
        method: 'get',
        url: projectsLink,
        responseType: 'json'
    })

    const [projects] = await Promise.all([selectedProjectData])

    const projectData = findProject(projects.data, context.query.project)

    console.log(projectData)

    if(projectData === undefined) {
        return {
            props: {
                error: "cant find project"
            }
        }
    }

    return {
        props: {
            name: projectData?.name,
            slug: projectData?.slug,
            title: projectData?.title,
            description: projectData?.description,
            properties: projectData?.properties,
            download: projectData?.download,
            links: projectData?.links,
            images: projectData?.images,
            videos: projectData?.videos,
        }
    };
}

function findProject(data: APIData, project: string): Data | undefined {
    return data.project.find(p => p.slug === project)
}

export default ProjectData