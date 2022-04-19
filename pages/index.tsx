import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import {useState, useEffect} from 'react'

import {IoIosMoon, IoMdSunny} from 'react-icons/io';

import Description from '../components/description';
import {Biography} from '../components/biography';
import Link from '../components/link';


const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => setMounted(true), [])
  if(!mounted) return null
  return (
    <div className="w-screen h-screen flex flex-col">
		<nav className="w-screen px-3 fixed backdrop-filter backdrop-blur-2xl" >
			<div className="p-4 max-w-3xl mx-auto flex flex-row justify-between">
				<div className="flex flex-row items-center">
					{/* <img src="/vercel.svg" className="h-12" /> */}
					{/* <div className="bg-white w-3 h-3 border-2 border-color rounded mr-2"></div> */}
					<h1 className="text-2xl font-mplus font-bold" >Leogadil</h1>
				</div>
				<div className="flex flex-row items-center">
					<ul className="flex mr-4">
						<li className="flex-1 mr-3 cursor-pointer">Projects</li>
						<li className="flex-1 cursor-pointer">Blog</li>
					</ul>
					<button 
						className="bg-transparent bg-accent-2 dark:bg-main-accent p-2 rounded"  
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>{theme === 'light' ? <IoIosMoon size="1.5em" className="text-th-light"/> : <IoMdSunny size="1.5em"/>}</button>
				</div>
			</div>
		</nav>
		<main className="w-screen max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
			{/* <div className="h-96 px-10">
			</div> */}
			<div className="px-10 w-full">
				<div className="dark:bg-th-light-dark bg-th-light-light w-full rounded-md mb-10 px-4 py-3 flex sm:flex-row flex-col-reverse">
					<div className="flex flex-row justify-center">
						<div className="sm:mr-5 w-20 mt-5 sm:mt-0 bg-accent-2 dark:bg-main-accent rounded-full p-0.5">
							<img className='w-20 h-auto m-auto rounded-full' src="/profilepic.jpg" alt="profile" />
						</div>
					</div>
					<div className="flex-1 flex flex-col sm:text-right text-center justify-center">
						<h1 className="text-2xl font-bold antialiased tracking-wider font-mplus leading-none">Jann Leo Gadil</h1>
						<h2 className="text-2xl font-bold antialiased tracking-widest font-caveat leading-none text-accent-2 dark:text-main-accent">Full-stack Developer</h2>
					</div>
				</div>
			</div>
			<Description title="About" description={[
				"Hello, I'm Jann Leo Gadil, a full-stack developer based in Manila. I like creating scripts, programs, and websites thats peaks the interests of users. as a full-stack developer.",
				"I remember the first software i built, a voice recognition program in C# like J.A.R.V.I.S from Iron Man. it's feature is playing music, tell the news, even search from voice. Now, I am able to create all kinds of program, scripts, websites that helps clients, businesses, in their needs."
			]} />
			<div className="px-10 w-full">
				<div className="dark:bg-th-light-dark bg-th-light-light w-full rounded-md mb-10 px-4 py-3 flex sm:flex-row flex-col-reverse">
					<div className="flex-1 flex flex-row justify-center">
						<h1 className="opacity-50">I am pleased to meet you.</h1>
					</div>
					
				</div>
			</div>
			<Biography title="Bio" description={[
				['Born', 'August 29, 1997'],
				['Lives in', 'Manila, Philippines'],
				['Studied at', <Link link="https://www.facebook.com/St-Michael-Montessori-Integrated-School-230990113578947/" text="St. Michael Montesorri Integrated School"/>],
				['Studying at', <Link link="https://www.sti.edu/" text="STI College Ortigas-Cainta" />],
			]} />
			<Description title="pastimes" description={[
				"I like to watch movies, play games, and listen to music. I also like to make cinematics and make videos.",
			]} />
		</main>
        
    </div>
  )
}

export default Home
