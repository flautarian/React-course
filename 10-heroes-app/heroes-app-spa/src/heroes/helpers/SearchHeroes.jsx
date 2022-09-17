import React from 'react'
import { heroes } from '../data/heroes'

export const SearchHeroes = (criteria) => {
    return heroes.filter(hero => hero.superhero.includes(criteria));
}
