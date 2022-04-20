import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import TheLayout from '../components/thelayout'

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<ThemeProvider attribute='class'>
			<TheLayout>
				<Component {...pageProps}/>
			</TheLayout>
		</ThemeProvider>
	)
}

export default MyApp
