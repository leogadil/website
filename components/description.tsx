import React from 'react'

type IProps = {
	title : string
	description : Array<string>
}

const Description : React.FC<IProps> = ({title, description}) => {
    return (
        <div className="grid sm:grid-cols-3 gap-2 grid-rows-2s mb-10 px-10">
				<div className="text-left">
					<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-widest">
						{title}
					</span>
					<div className="w-15 sm:w-32 h-1 rounded bg-accent-2 dark:bg-main-accent">
					</div>
				</div>
				<div className="col-span-2 break-words">
					{description.map((desc, _) => {
						return (
							<p className="text-justify mb-3 indent-10 sm:indent-0">
								{desc}
							</p>
						)
					})}
				</div>
			</div>
    )
}

export default Description