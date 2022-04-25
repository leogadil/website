import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { APIData, Data } from '../../../lib/types'

const cdntemplate = "https://cdn.jsdelivr.net/gh/leogadil/website-cdn/"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const project = req.query.project as string
    const cdn = cdntemplate + "projects.json"
  
    await axios
    .get<APIData>(cdn)
    .then(response => {
      res.status(200).json(findProject(response.data, project))
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
}

function findProject(data: APIData, project: string): Data | undefined {
    return data.project.find(p => p.slug === project)
}