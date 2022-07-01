import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import Description from '../components/description';
import { Biography } from '../components/biography';
import Link from '../components/link';
import { Introduction, Welcoming } from '../components/banner';
import ButtonLink from '../components/buttonlink';
import { Socials } from '../components/socials';
import Footer from '../components/footer';
import HeadMeta from '../components/head';
import { Carousel } from '../components/carousel';

const HomePage: NextPage = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])
	if (!mounted) return null
	return (
		<>
			<HeadMeta title="Homepage"/>
			<Introduction delay={0.1}/>
			<Description title="About" delay={0.2} isindented description={[
				"Hello, I'm Jann Leo Gadil, a full-stack developer based in Manila. I like creating scripts, programs, and websites that peaks the interests of users. as a full-stack developer.",
				"I remember the first software i built, a voice recognition program in C# like J.A.R.V.I.S from Iron Man. It's feature include playing music, telling the news, and even searching with your voice. Now, I am able to create all kinds of programs, scripts, websites that help clients, businesses, in their needs."
			]} />
			<ButtonLink text="Read my Blogs" url="/blogs" delay={0.3} />
			<Welcoming delay={0.4}/>
			<Biography title="Bio" delay={0.5} description={[
				['Born', 'April 03, 2001'],
				['Lives in', 'Manila, Philippines'],
				['Studied at', <Link link="https://www.facebook.com/St-Michael-Montessori-Integrated-School-230990113578947/" text="St. Michael Montesorri Integrated School" />],
				['Studying at', <Link link="https://www.sti.edu/" text="STI College Ortigas-Cainta" />],
			]} />
			<Carousel delay={0.6}/>
			<Description title="Pastimes" delay={0.7} description={[
				"I like to watch movies, play games, and listen to music. I also like to make cinematics and make videos.",
			]} />
			<Socials delay={0.8} />
			<ButtonLink text="See my projects" url="/projects" delay={0.9} />
			<Footer delay={1}/>
		</>
	)
}

export default HomePage
