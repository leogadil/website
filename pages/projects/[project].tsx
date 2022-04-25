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
import { APIData, Data, Property } from '../../lib/types'

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
                delay={0.4 + (props.properties ? props.properties?.length * 0.1 : 0.1)} />}
            {props.images && props.images.length > 0 && <ProjectImages images={props.images} 
                delay={0.5 + 
                (props.properties ? props.properties?.length * 0.1 : 0.1) +
                (props.links ? props.links?.length * 0.1 : 0.1)} />}
            <Footer delay={
                0.4 +
                (props.properties ? props.properties?.length * 0.1 : 0.1) +
                (props.links ? props.links?.length * 0.1 : 0.1) + 
                (props.images ? props.images?.length * 0.1 : 0.1)
            } />
        </>
    )
}

export async function getServerSideProps(context: any) {

    const cdntemplate = "https://cdn.jsdelivr.net/gh/leogadil/website-cdn/"

    const cdn = cdntemplate + "projects.json"

    const selectedProjectData = axios({
        method: 'get',
        url: cdn,
        responseType: 'json'
    })

    const [projects] = await Promise.all([selectedProjectData])

    const projectData = findProject(projects.data, context.query.project)

    return {
        props: {
            name: projectData?.name,
            slug: projectData?.slug,
            title: projectData?.title,
            description: projectData?.description,
            properties: projectData?.properties,
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