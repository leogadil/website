import React from 'react'

type IImageProps = {
    imglink: string,
    title?: string,
    description?: string,
    className?: string
}

const Image: React.FC<IImageProps> = ({imglink, title, description, className }) => {

    const [isError, setIsError] = React.useState(false)

    const handleError = (e : any) => {
        setIsError(true)
    }

    if(isError) {
        return (
            <div className={className + " rounded-2xl flex flex-col justify-center items-center bg-accent-2 dark:bg-main-accent blur-[1px]"}>
                <h1 className="text-lg font-bold ">Error</h1>
                <h2 className="text-sm">Could not load image</h2>
            </div>
        )
    }

    return (
        <img className={className + " rounded-2xl"} src={imglink} alt={title}
            onError={(e) => {
                handleError(e)
            }}
        />
    )
}

export default Image
