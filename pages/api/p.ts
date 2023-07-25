import type { NextApiRequest, NextApiResponse } from 'next'

type Projects = {
    name: string,
    description: string,
    image: string,
    techstack: string,
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ name: 'John Doe' })
}