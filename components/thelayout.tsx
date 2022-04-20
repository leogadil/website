import React from 'react'

import Header from './header'

const TheLayout : React.FC = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="max-w-lg mx-auto mt-32 flex-1 flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    )
}

export default TheLayout