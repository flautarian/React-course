import React from 'react'
import { Fragment } from 'react'
import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <Fragment>
      <div className='animate__animated animate__fadeInDown'>
        <h1>MarvelPage</h1>
        <hr/>
      </div>
      <HeroList publisher={'Marvel Comics'}/>
    </Fragment>
  )
}
