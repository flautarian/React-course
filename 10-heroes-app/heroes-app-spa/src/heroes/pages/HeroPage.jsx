import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { HeroCard } from '../components'
import { getHeroById } from '../helpers/getHeroById';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { Navigate, useNavigate } from 'react-router-dom';

export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => {
    return getHeroById(id);
  }, [id]);

  if (!hero) return (<Navigate to='/marvel' />);


  const heroImg = `/assets/heroes/${hero.id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={heroImg} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeftBig" />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> Alter ego: <b>{hero.alter_ego}</b></li>
          <li className='list-group-item'> Publisher: <b>{hero.publisher}</b></li>
          <li className='list-group-item'> First appearance: <b>{hero.first_appearance}</b></li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-outline-primary' onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  )
}
