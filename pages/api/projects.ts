// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { APIData } from '../../lib/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cdn = "https://cdn.jsdelivr.net/gh/leogadil/website-cdn/projects.json"

  await axios
  .get<APIData>(cdn)
  .then(response => {
    res.status(200).json(response.data.project)
  })
  .catch(error => {
    res.status(500).json({ error: error.message })
  })
}
