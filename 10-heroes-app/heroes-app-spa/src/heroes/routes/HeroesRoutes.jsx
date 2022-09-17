import React from 'react'
import { Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../../ui'
import { DcPage, HeroPage, MarvelPage, SearchHeroPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <Fragment>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/dc" element={<DcPage />} />

                    <Route path="/search" element={<SearchHeroPage />} />
                    <Route path="/hero/:id" element={<HeroPage />} />
                    
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </Fragment>
    )
}
