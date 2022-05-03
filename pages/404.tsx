import React from 'react'
import AnimateSection from '../components/animatesection'
import HeadMeta from '../components/head'
import { I_404Props } from '../lib/types'

const _404 : React.FC<I_404Props> = ({ reason }) => {
  return (
    <>
      <HeadMeta title="404"/>
      <AnimateSection>

        <h1>404</h1>
        { reason ? reason : "cant find this page" }
      </AnimateSection>
    </>
  )
}

export default _404