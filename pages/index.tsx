import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import {useState, useEffect} from 'react'

import {IoIosMoon, IoMdSunny} from 'react-icons/io'


const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => setMounted(true), [])
  if(!mounted) return null
  return (
    <div className="w-screen h-screen flex flex-col">
		<nav className="w-screen px-3" >
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
		<main className="w-screen h-screen max-w-lg mx-auto overflow-hidden px-10 flex-1 flex flex-col items-center justify-center">
			<div className="">
				<h1 className="font-bold text-4xl">Under Construction</h1>
			</div>
			{/* <div className="grid sm:grid-cols-3 gap-2 grid-rows-2s mb-10">
				<div className="text-left">
					<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-widest">
						About
					</span>
					<div className="w-15 sm:w-32 h-1 rounded bg-accent-2 dark:bg-main-accent">
					</div>
				</div>
				<div className="col-span-2 break-words">
					<p className="text-justify mb-3 indent-10 sm:indent-0">
						Hello, I'm Jann Leo Gadil, a full-stack developer based
						in Manila. I like creating scripts, programs, and
						websites thats peaks the interests of users. as a
						full-stack developer.
					</p>
					<p className="text-justify mb-3 indent-10 sm:indent-0">
						I remember the first software i built, a voice
						recognition program in C# like J.A.R.V.I.S from Iron
						Man. it's feature is playing music, tell the
						news, even search from voice. Now, I am able to create
						all kinds of program, scripts, websites that helps clients, 
						businesses, in their needs.
					</p>
				</div>
			</div>
			<div className=" grid sm:grid-cols-3 gap-2 grid-rows-2s">
				<div className="text-left">
					<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-widest">
						Bio
					</span>
					<div className="w-15 sm:w-32 h-1 rounded bg-accent-2 dark:bg-main-accent">
					</div>
				</div>
				<div className="col-span-2 break-words">
					<p className="text-justify mb-3 indent-10 sm:indent-0">
						Hello, I'm Jann Leo Gadil, a full-stack developer based
						in Manila. I like creating scripts, programs, and
						websites thats peaks the interests of users. as a
						full-stack developer.
					</p>
					<p className="text-justify mb-3 indent-10 sm:indent-0">
						I remember the first software i built, a voice
						recognition program in C# like J.A.R.V.I.S from Iron
						Man. it's feature is playing music, tell the
						news, even search from voice.
					</p>
					<p className="text-justify indent-10 sm:indent-0">
						Now, I am able to create all kinds of program, scripts,
						websites that helps clients, businesses, in their needs.
					</p>
				</div>
			</div> */}
		</main>
        
    </div>
  )
}

export default Home
