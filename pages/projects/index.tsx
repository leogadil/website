import type { NextPage } from 'next'
import Head from 'next/head'

import CenterTitle from '../../components/centertitle'
import Footer from '../../components/footer'
import Projects from "../../components/projects"

const ProjectsPage: NextPage = () => {

    // find a better way to implement delays on every components dynamically

    const projects : Array<{
            imglink: string,
            title: string,
            description: string
        }> = [
        {
            imglink: "/samantha.jpg",
            title: "Samantha",
            description: "is a natural language intelligent digital assistant."
        },
        {
            imglink: "/atlas.jpg",
            title: "Atlas",
            description: "is a restaurant chatbot. You can ask questions about the restaurant."
        }
    ]

    console.log(projects.length)

    return (
        <>
            <Head>
				<title>Projects</title>
			</Head>
            <CenterTitle text="Projects" delay={0.1} />
            <Projects delay={0.2} projects={projects}/>
            <Footer delay={projects.length != 0 ? (projects.length * 0.1) + 0.2 : 0.3}/>
        </>
    )
}

export default ProjectsPage