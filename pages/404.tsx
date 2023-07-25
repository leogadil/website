import React from 'react'
import AnimateSection from '../components/animatesection'
import Footer from '../components/footer'
import HeadMeta from '../components/head'
import { I_404Props } from '../lib/types'

const _404 : React.FC<I_404Props> = ({ reason }) => {
  return (
    <>
      <HeadMeta title="404"/>
      <AnimateSection>

        <h1>404</h1>
        <p>{ reason ? reason : "cant find this page" }</p>
        
      </AnimateSection>
      <Footer delay={0.2} />
    </>
  )
}

export default _404