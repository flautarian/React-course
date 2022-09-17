import React, { useState, Fragment, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { SearchHeroes } from '../helpers/SearchHeroes';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../components';

export const SearchHeroPage = () => {

  const [heroes, setHeroes] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();

  const query = queryString.parse(location.search);

  const showError  = (!!query.q && query.q.length > 0) && heroes.length === 0;

  const { form, onFormChange, formReset } = useForm({
    searchText: query.q,
  });

  const { searchText } = form;

  useEffect( () => {
    if(!!query.q && query.q.length > 0)
      setHeroes(() => SearchHeroes(searchText));
  }, []);


  const submitSearch = (event) => {
    event.preventDefault();
    if(searchText.length == 0)
      return;
    navigate(`?q=${searchText}`);
    setHeroes(() => SearchHeroes(searchText));
  }

  return (
    <Fragment>
      <div className='animate__animated animate__fadeInDown'>
        <h1>SearchHeroPage</h1>
        <hr />
      </div>
      <div className='row'>
        <div className='col-5'>
          <h4>Searching...</h4>
          <hr />
          <form onSubmit={submitSearch}>
            <input type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onFormChange}
            />
            <button type='submit' className='btn btn-primary mt-2'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results...</h4>
          <hr />
          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{query.q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>
      </div>


    </Fragment>
  )
}
