import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'
import Projects from "../../components/projects"
import { IProjectsProps, APIData } from '../../lib/types'

const ProjectsPage: NextPage<IProjectsProps> = ({ projects }) => {

    return (
        <>
            <Head>
				<title>Projects</title>
			</Head>
            <CenterTitle text="Projects" delay={0.1} />
            <Projects delay={0.2} projects={projects} />
            <Footer delay={projects && projects.length != 0 ? (projects.length * 0.1) + 0.2 : 0.3}/>
        </>
    )
}


export async function getServerSideProps() {

    const cdn = "https://cdn.jsdelivr.net/gh/leogadil/website-cdn/projects.json"

    const projectsData = axios({
        method: 'get',
        url: cdn,
        responseType: 'json'
    })
    
    const [ projects ] = await Promise.all([projectsData])

    return {
        props: {
            projects: projects.data.project
        }
    };
}

export default ProjectsPage