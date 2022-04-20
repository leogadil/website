import React from 'react'
import Link from 'next/link'

import { FaAngleRight } from 'react-icons/fa'

type IButtonLinkProps = {
    text: string
    url: string
}

const ButtonLink : React.FC<IButtonLinkProps> = ({ text, url }) => {
    return (
        <Link href={url}>
            <button className={"bg-accent-2 dark:bg-main-accent p-2 px-3 text-th-light rounded flex flex-row justify-center items-center hover:bg-accent-2-light hover:dark:bg-main-accent-hover transition-colors"}>
                <span>{text}</span>
                <FaAngleRight className="ml-1 mt-[3.5px] text-th-light" />
            </button>
        </Link>
    )
}

export default ButtonLink