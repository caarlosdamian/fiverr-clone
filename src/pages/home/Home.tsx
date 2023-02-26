import React from 'react'
import { Featured } from '../../components/featured/Featured'
import { TrustedBy } from '../../components/trustedBy/TrustedBy'
import './Home.scss'

export const Home = () => {
  return (
    <div>
      <Featured/>
      <TrustedBy/>
    </div>
  )
}
