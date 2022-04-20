import React from 'react'
import { useTheme } from 'next-themes'

import {IoIosMoon, IoMdSunny} from 'react-icons/io';

const Header : React.FC = () => {

    const {theme, setTheme} = useTheme()

    return (
        <nav className="w-full px-3 fixed backdrop-filter backdrop-blur-2xl " >
			<div className="p-2 max-w-3xl mx-auto flex flex-row justify-between ">
				<div className="flex flex-row items-center">
					{/* <img src="/vercel.svg" className="h-12" /> */}
					{/* <div className="bg-white w-3 h-3 border-2 border-color rounded mr-2"></div> */}
					<h1 className="text-2xl font-mplus font-bold" ><a href="/">Leogadil</a></h1>
				</div>
				<div className="flex flex-row items-center">
					<ul className="flex mr-4">
						<li className="flex-1 mr-3 cursor-pointer"><a href="/projects">Projects</a></li>
						<li className="flex-1 cursor-pointer"><a href="/blogs">Blogs</a></li>
					</ul>
					<button 
						className="bg-transparent bg-accent-2 dark:bg-main-accent p-2 rounded"  
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					>{theme === 'light' ? <IoIosMoon size="1.2em" className="text-th-light"/> : <IoMdSunny size="1.2em"/>}</button>
				</div>
			</div>
		</nav>
    )
}

export default Header