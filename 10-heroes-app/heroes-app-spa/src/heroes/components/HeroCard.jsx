import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters, }) => {

  const heroImg = `/assets/heroes/${id}.jpg`;

  const CharacterByHero = ({ alter_ego, characters}) => {
    return alter_ego === characters ? (<></>) : (<span>{characters}</span>);
  }

  return (
    <Fragment>
      <div className='animate__animated animate__fadeIn'>
        <div className='card'>
          <div className='row no-gutters'>
            <div className='col-4'>
              <img src={heroImg} className='card-img' alt={superhero} />
            </div>
            <div className='col-8'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p>
                <CharacterByHero alter_ego={alter_ego} characters={characters}/>
              </p>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>More info</Link>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}
