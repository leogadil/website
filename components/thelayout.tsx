import React from 'react'

import Header from './header'

const TheLayout : React.FC = ({ children }) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <main className="w-screen max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}

export default TheLayout