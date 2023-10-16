import type { NextPage } from 'next'
import Head from 'next/head'

import path from 'path'
import getConfig from 'next/config'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'
import Projects from "../../components/projects"
import { Data } from '../../lib/types'
import HeadMeta from '../../components/head'
import ProjectsData from "../../public/projects.json"

const ProjectsPage: NextPage = () => {

    const projects : Data[] = ProjectsData.project as Data[]

    return (
        <>
            <HeadMeta title="Projects" />
            <CenterTitle text="Projects" delay={0.1} />
            <Projects delay={0.2} projects={projects} />
            <Footer delay={projects && projects.length != 0 ? (projects.length * 0.1) + 0.2 : 0.3} />
        </>
    )
}

export default ProjectsPage