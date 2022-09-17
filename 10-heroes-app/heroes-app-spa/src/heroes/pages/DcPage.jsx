import React from 'react'
import { Fragment } from 'react'
import { HeroList } from '../components'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const DcPage = () => {

  return (
    <Fragment>
      <div className='animate__animated animate__fadeInDown'>
        <h1>DcPage</h1>
        <hr/>
      </div>
      <HeroList publisher={'DC Comics'}/>
    </Fragment>
  )
}
