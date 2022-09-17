import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroById = (id) => {
    const availableHeroes = new Set(heroes.map(hero => hero.id));
    if (!id || !availableHeroes.has(id))
        return null;
    return heroes.filter(hero => hero.id === id)[0];
}