import { useState, useEffect, SetStateAction } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import {useRouter} from 'next/router';

import Router from 'next/router'
import nProgress from 'nprogress'
import Header from '../components/header'

import uuid from '../lib/uuid'



function MyApp({ Component, pageProps }: AppProps) {

	const router = useRouter()

	useEffect(() => {
		const handlleRouteStart = () => nProgress.start()
		const handleRouteEnd = () => nProgress.done()
		
		Router.events.on('routeChangeStart', handlleRouteStart)
		Router.events.on('routeChangeComplete', handleRouteEnd)
		Router.events.on('routeChangeError', handleRouteEnd)

		return () => {
			Router.events.off('routeChangeStart', handlleRouteStart)
			Router.events.off('routeChangeComplete', handleRouteEnd)
			Router.events.off('routeChangeError', handleRouteEnd)
		}
	})

	if(router.pathname === '/cv') {
		return <Component {...pageProps} />
	}

	return (
		<ThemeProvider attribute='class' enableColorScheme>
			<div className="flex flex-col">
				<Header />
				<div className="w-full max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.pathname}/>
					</AnimatePresence>
				</div>
			</div>
		</ThemeProvider>
	)
}

export default MyApp
