import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'

import {IoIosMoon, IoMdSunny} from 'react-icons/io';
import router, {useRouter} from 'next/router';

const Header : React.FC = () => {

    const {theme, setTheme} = useTheme()
	const route = useRouter()

	const switchPage= (_link : string) => {
		router.push(_link, undefined, { shallow: true })
	}

	const [Sroute, setSroute] = useState(route.pathname)

	useEffect(() => {
		setSroute(route.pathname)
	}, [route.pathname])

    return (
        <nav className="w-full px-3 fixed backdrop-filter backdrop-blur-2xl " >
			<div className="p-2 max-w-3xl mx-auto flex flex-row justify-between ">
				<div className="flex flex-row items-center">
					{/* <img src="/vercel.svg" className="h-12" /> */}
					{/* <div className="bg-white w-3 h-3 border-2 border-color rounded mr-2"></div> */}
					<h1 className="text-2xl font-mplus font-bold" ><button onClick={() => switchPage('/')}>Leogadil</button></h1>
				</div>
				<div className="flex flex-row items-center">
					<ul className="flex mr-4">
						<li className="flex-1 mr-3 cursor-pointer">
							<button onClick={() => switchPage('/projects')}>
								Projects
							</button>
							<div className={Sroute.toLowerCase().indexOf('/projects') != -1 ? 'w-full h-1 rounded bg-accent-2 dark:bg-main-accent' : ''}>
							</div>
						</li>
						<li className="flex-1 cursor-pointer">
							<button onClick={() => switchPage('/blogs')}>
								Blogs
							</button>
							<div className={Sroute.toLowerCase().indexOf('/blogs') != -1 ? 'w-full h-1 rounded bg-accent-2 dark:bg-main-accent' : ''}>
							</div>
						</li>
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