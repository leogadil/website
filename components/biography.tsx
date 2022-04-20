import React from 'react'


type IBioProps = {
	title : string
	description : Array<any>
}

const Biography : React.FC<IBioProps> = ({title, description}) => {
    return (
        <div className="grid sm:grid-cols-3 gap-2 grid-rows-2s mb-10 px-10">
			<div className="text-left">
				<span className="font-black text-lg sm:text-xl font-mplus dark:text-main-accent text-accent-2 tracking-widest">
					{title}
				</span>
				<div className="w-15 sm:w-32 h-1 rounded bg-accent-2 dark:bg-main-accent">
				</div>
			</div>
			<div className="col-span-2 grid grid-cols-2 gap-4">
				{description.map((desc, _) => {
					return (
						<BioCol key={desc[0]} year={desc[0]} description={desc[1]} />
					)
				})}
			</div>
		</div>
    )
}

type IBioColProps = {
	year : string
	description : string
}

const BioCol : React.FC<IBioColProps> = ({year, description}) => {
    return (
        <>
            <h1 className="font-bold ">{year}</h1>
            <h1 className="opacity-75">{description}</h1>
        </>
    )
}



export { Biography, BioCol }

