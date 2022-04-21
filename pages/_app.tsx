import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import {useRouter} from 'next/router';

import Header from '../components/header'
// import Footer from '../components/footer'


function MyApp({ Component, pageProps }: AppProps) {

	const router = useRouter()

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
