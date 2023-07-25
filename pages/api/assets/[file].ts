import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { APIData, Data } from '../../../lib/types'

const cdntemplate = "https://cdn.jsdelivr.net/gh/leogadil/website-cdn/assets/"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const file = req.query.file as string

    await axios
    .get<APIData>(cdntemplate + file.replace('-', '/'))
    .then(response => {
      res.redirect(cdntemplate + file.replace('-', '/'))
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
}