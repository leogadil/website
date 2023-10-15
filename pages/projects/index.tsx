import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'
import Projects from "../../components/projects"
import { IProjectsProps, APIData } from '../../lib/types'
import HeadMeta from '../../components/head'
import { useState } from 'react'

const ProjectsPage: NextPage<IProjectsProps> = ({ projects }) => {

    return (
        <>
            <HeadMeta title="Projects"/>
            <CenterTitle text="Projects" delay={0.1} />
            <Projects delay={0.2} projects={projects} />
            <Footer delay={projects && projects.length != 0 ? (projects.length * 0.1) + 0.2 : 0.3}/>
        </>
    )
}

export async function getServerSideProps() {

    const projectsLink = process.env.NODE_ENV == 'development' ? 'http://localhost:3000/projects.json' : process.env.PUBLIC_URL + '/projects.json'

    const res = await axios.get<APIData>(projectsLink)

    return {
        props: {
            projects: res.data.project
        }
    }
}

export default ProjectsPage