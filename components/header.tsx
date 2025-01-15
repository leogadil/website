import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

import { IoIosMoon, IoMdSunny } from 'react-icons/io';
import { DiGithubBadge } from 'react-icons/di';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRouter } from 'next/router';
import Link from 'next/link'
import Banner from '../pages/bannerbar';

const Header: React.FC = () => {

	const { theme, setTheme } = useTheme()
	const route = useRouter()

	const [burgerisOpen, setBurgerisOpen] = useState(false)

	const [Sroute, setSroute] = useState(route.pathname)

	useEffect(() => {
		setSroute(route.pathname)
	}, [route.pathname])

	const variants = {
		show: {
			width: 200,
			height: 'auto',
			transition: {
				duration: 0.2,
				delay: 0
			}
		},
		hide: {
			width: 0,
			height: 0,
			transition: {
				duration: 0.2,
				delay: 0
			}
		},
	}

	return (
		<>
			<AnimatePresence>
				{burgerisOpen &&
					<motion.div className='fixed top-[52px] mx-5 right-[0px] z-[500] w-[250px]  rounded-lg sm:hidden block overflow-hidden dark:bg-th-light-dark bg-th-light-light drop-shadow-xl'
						variants={variants}
						initial={variants.hide}
						animate={"show"}
						exit={"hide"}
						key={`burger-menu`}
					>
						<div className=" cursor-pointer ">
							<Link href="/cv" scroll={false}>
								<button className="hover:dark:bg-main-accent hover:bg-accent-2 w-full p-3 text-md hover:text-th-light " onClick={() => setBurgerisOpen(false)}>CV</button>
							</Link>
						</div>
						<div className=" cursor-pointer ">
							<Link href="/projects" scroll={false}>
								<button className="hover:dark:bg-main-accent hover:bg-accent-2 w-full p-3 text-md hover:text-th-light " onClick={() => setBurgerisOpen(false)}>Projects</button>
							</Link>
						</div>
						{/* <div className="cursor-pointer ">
							<Link href="/blogs" scroll={false}>
								<button className="hover:dark:bg-main-accent hover:bg-accent-2 w-full p-3 text-md hover:text-th-light transition-colors" onClick={() => setBurgerisOpen(false)}>Blogs</button>
							</Link>
						</div> */}
						<div className="cursor-pointer">
							<Link passHref href="https://github.com/leogadil/website" scroll={false}>
								<a target="_blank" rel="noopener noreferrer">
									<button className="hover:dark:bg-main-accent hover:bg-accent-2 flex flex-row items-center justify-center w-full p-3 text-md hover:text-th-light " onClick={() => setBurgerisOpen(false)}>
										<DiGithubBadge className='' />
										Source
									</button>
								</a>
							</Link>
						</div>
					</motion.div>
				}
			</AnimatePresence>
			
			<nav className="w-full fixed bg-th-light-half dark:bg-th-dark-half backdrop-filter backdrop-blur-2xl z-10 duration-200" >
			<Banner />
				<div className="p-2 max-w-3xl mx-auto flex flex-row justify-between ">
					<div className="flex flex-row items-center">
						{/* <img src="/vercel.svg" className="h-12" /> */}
						{/* <div className="bg-white w-3 h-3 border-2 border-color rounded mr-2"></div> */}
						<h1 className="text-2xl font-mplus font-bold transition-colors duration-0 dark:duration-0" ><Link href="/" scroll={false}>Leogadil</Link></h1>
					</div>
					<div className="flex flex-row items-center">
						<ul className="flex mr-4">
							<li className="flex-1 mr-3 cursor-pointer text-lg hidden sm:block">
								<Link href="/cv" scroll={false}>
									<button className="hover:dark:text-main-accent hover:text-accent-2 ">CV</button>
								</Link>
								<div className={"w-full h-1 rounded bg-transparent dark:bg-transparent " + (Sroute.toLowerCase().indexOf('/cv') != -1 ? 'bg-accent-2 dark:bg-main-accent' : '')}>
								</div>
							</li>
							<li className="flex-1 mr-3 cursor-pointer text-lg hidden sm:block">
								<Link href="/projects" scroll={false}>
									<button className="hover:dark:text-main-accent hover:text-accent-2 ">Projects</button>
								</Link>
								<div className={"w-full h-1 rounded bg-transparent dark:bg-transparent " + (Sroute.toLowerCase().indexOf('/projects') != -1 ? 'bg-accent-2 dark:bg-main-accent' : '')}>
								</div>
							</li>
							{/* <li className="flex-1 mr-3 cursor-pointer text-lg hidden sm:block">
								<Link href="/blogs" scroll={false}>
									<button className="hover:dark:text-main-accent hover:text-accent-2 transition-colors">Blogs</button>
								</Link>
								<div className={"w-full h-1 rounded bg-transparent dark:bg-transparent transition-colors " + (Sroute.toLowerCase().indexOf('/blogs') != -1 ? 'bg-accent-2 dark:bg-main-accent' : '')}>
								</div>
							</li> */}
							<li className="flex-1 cursor-pointer text-lg hidden sm:block">
								<Link passHref href="https://github.com/leogadil/website" scroll={false}>
									<a target="_blank" rel="noopener noreferrer">
										<button className="hover:dark:text-main-accent hover:text-accent-2 flex flex-row items-center ">
											<DiGithubBadge className='' />
											Source
										</button>
									</a>
								</Link>
								<div className={"w-full h-1 rounded bg-transparent dark:bg-transparent"}>
								</div>
							</li>
							<li className="flex-1 cursor-pointer text-lg sm:hidden block" >
								<button className='hover:dark:text-main-accent hover:text-accent-2 p-2' onClick={() => setBurgerisOpen(!burgerisOpen)}>
									<GiHamburgerMenu />
								</button>
							</li>
						</ul>
						<button
							className="bg-transparent bg-accent-2 dark:bg-main-accent p-2 rounded hover:bg-accent-2-light hover:dark:bg-main-accent-hover"
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
						>{theme === 'light' ? <IoIosMoon size="1.2em" className="text-th-light" /> : <IoMdSunny size="1.2em" />}</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Header