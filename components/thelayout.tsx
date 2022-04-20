import React from 'react'
import { AnimatePresence } from 'framer-motion'

import Header from './header'
import Footer from './footer'

const TheLayout : React.FC = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <AnimatePresence exitBeforeEnter>
                <div className="max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
                    {children}
                </div>
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default TheLayout