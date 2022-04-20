import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import Description from '../components/description';
import { Biography } from '../components/biography';
import Link from '../components/link';
import Header from '../components/header'
import { Introduction, Welcoming } from '../components/banner';


const Home: NextPage = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])
	if (!mounted) return null
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Introduction />
			<Description title="About" description={[
				"Hello, I'm Jann Leo Gadil, a full-stack developer based in Manila. I like creating scripts, programs, and websites thats peaks the interests of users. as a full-stack developer.",
				"I remember the first software i built, a voice recognition program in C# like J.A.R.V.I.S from Iron Man. it's feature is playing music, tell the news, even search from voice. Now, I am able to create all kinds of program, scripts, websites that helps clients, businesses, in their needs."
			]} />
			<Welcoming />
			<Biography title="Bio" description={[
				['Born', 'April 03, 2001'],
				['Lives in', 'Manila, Philippines'],
				['Studied at', <Link link="https://www.facebook.com/St-Michael-Montessori-Integrated-School-230990113578947/" text="St. Michael Montesorri Integrated School" />],
				['Studying at', <Link link="https://www.sti.edu/" text="STI College Ortigas-Cainta" />],
			]} />
			<Description title="pastimes" description={[
				"I like to watch movies, play games, and listen to music. I also like to make cinematics and make videos.",
			]} />
		</>
	)
}

export default Home
