import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import {useState, useEffect} from 'react'

import {IoIosMoon, IoMdSunny} from 'react-icons/io'
// import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';


const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(() => setMounted(true), [])
  if(!mounted) return null
  return (
    <div className="w-screen h-screen bg-th-light dark:bg-th-dark transition-colors duration-300">
		<nav className="w-screen" >
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
						className="bg-transparent bg-accent-2 dark:bg-accent-1 p-2 rounded"  
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>{theme === 'light' ? <IoIosMoon size="1.5em"/> : <IoMdSunny size="1.5em"/>}</button>
				</div>
			</div>
		</nav>
		<main className="w-screen max-w-sm mx-auto overflow-hidden px-4">
			<div className=" grid grid-cols-3 gap-2">
				<div className="text-left">
					<span className="font-bold font-mplus ">About</span>
				</div>
				<div className="col-span-2 break-words">
					<p className="text-justify mb-3">
						Hello, I'm Jann Leo Gadil, a full-stack developer based
						in Manila. I like creating scripts, programs, and
						websites thats peaks the interests of users. as a
						full-stack developer.
					</p>
					<p className="text-justify mb-3">
						I remember the first software i built, a voice
						recognition program in C# like J.A.R.V.I.S from Iron
						Man. it's feature is playing music, tell the
						news, even search from voice.
					</p>
					<p className="text-justify">
						Now, I am able to create all kinds of program, scripts,
						websites that helps clients, businesses, in their needs.
					</p>
				</div>
			</div>
		</main>
        
    </div>
  )
}

export default Home
