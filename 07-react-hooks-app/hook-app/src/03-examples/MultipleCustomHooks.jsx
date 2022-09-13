import React, { Fragment, useEffect } from 'react'
import { CounterApp } from '../01-useState/CounterApp';
import { useCounter, useFetch } from '../hooks/index';
import { LoadingQuote } from './LoadingQuote';
import { QuoteComponent } from './QuoteComponent';

export const MultipleCustomHooks = () => {

    const { valueCounter, changeValue } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${valueCounter.counter2}`);

    return (
        <Fragment>
            <h1>Breaking bad Quotes</h1>
            <hr />
            {
                isLoading ?
                    <LoadingQuote /> :
                    <QuoteComponent data={data[0]} />
            }

            <button className='btn btn-primary' onClick={() => changeValue([0, 1, 0])}>Next quote</button>
        </Fragment>
    )
}
