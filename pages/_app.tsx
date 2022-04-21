import { useState, useEffect, SetStateAction } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import {useRouter} from 'next/router';

import Header from '../components/header'
import NotificationContainer from '../components/notification'
import NotifContext from '../lib/notifContext'


function MyApp({ Component, pageProps }: AppProps) {

	const [notifications, setNotifications] = useState<any>([
		{
			id: '1',
			title: 'Notification 1',
			message: 'This is a notification',
		}
	])

	const addNotification = (title: string, message?: string) => {
		setNotifications([...notifications, { title, message }])
	}

	const removeNotification = (id: string) => {
		console.log('removeNotification', id)
		setNotifications([...notifications.filter((notification: { id: string }) => notification.id !== id)])
	}

	const router = useRouter()

	return (
		<ThemeProvider attribute='class' enableColorScheme>
			<NotifContext.Provider value={{
				notifications,
				addNotification,
				removeNotification
			}}>
				<div className="flex flex-col">
					<Header />
					{/* <NotificationContainer /> */}
					<div className="w-full max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
						<AnimatePresence exitBeforeEnter>
							<Component {...pageProps} key={router.pathname}/>
						</AnimatePresence>
					</div>
				</div>
			</NotifContext.Provider>
		</ThemeProvider>
	)
}

export default MyApp
