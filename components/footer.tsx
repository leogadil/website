import React from 'react'

const Footer : React.FC = () => {

    // get current year
    const year = new Date().getFullYear()

    return (
        <nav className="w-full px-3">
			<div className="p-2 max-w-3xl mx-auto flex flex-col justify-center text-center pb-6">
				<div className="w-full bg-gray-2 h-[.5px] mt-4 mb-6"></div>
                <h1 className="text-gray-1">Copyright &copy; {year} LeoGadil. All Rights Reserved</h1>
			</div>
		</nav>
    )
}

export default Footer