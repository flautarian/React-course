import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {
    const availablePublishers = new Set(heroes.map(hero => hero.publisher));
    if (!publisher || !availablePublishers.has(publisher))
        throw new Error(`${publisher} not exist in the helper`);
    return heroes.filter(hero => hero.publisher === publisher);
}