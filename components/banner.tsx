import React from 'react'


const BannerLayout : React.FC = ({ children }) => {
    return (
        <div className="px-10 w-full">
            <div className="dark:bg-th-light-dark bg-th-light-light w-full rounded-md mb-10 px-4 py-3 flex sm:flex-row flex-col-reverse">
                {children}
            </div>
        </div>
    )
}

const Introduction : React.FC = () => {
    return (
        <BannerLayout>
            <div className="flex flex-row justify-center">
                <div className="sm:mr-5 w-20 mt-5 sm:mt-0 bg-accent-2 dark:bg-main-accent rounded-full p-0.5">
                    <img className='w-20 h-auto m-auto rounded-full' src="/profilepic.jpg" alt="profile" />
                </div>
            </div>
            <div className="flex-1 flex flex-col sm:text-right text-center justify-center">
                <h1 className="text-2xl font-bold antialiased tracking-wider font-mplus leading-none">Jann Leo Gadil</h1>
                <h2 className="text-2xl font-bold antialiased tracking-widest font-caveat leading-none text-accent-2 dark:text-main-accent">Full-stack Developer</h2>
            </div>
        </BannerLayout>
    )
}

const Welcoming : React.FC = () => {
    return (
        <BannerLayout>
            <div className="flex-1 flex flex-row justify-center">
                <h1 className="opacity-50">I am pleased to meet you.</h1>
            </div>
        </BannerLayout>
    )
}

export {Introduction, Welcoming}