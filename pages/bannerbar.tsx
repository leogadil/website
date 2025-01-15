import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Banner = () => {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="dark:bg-[#1B1833] transition-colors flex items-center px-3 drop-shadow-xl bg-[#F29F58]">
			<div className="flex items-center justify-center p-2 max-w-3xl mx-auto">
				<h1>
					This portfolio is currently being updated. Please check back later.
				</h1>
			</div>
			<button onClick={handleClose} aria-label="Close Banner">
				<IoClose className="text-white text-2xl cursor-pointer" />
			</button>
		</div>
	);
}

export default Banner;
