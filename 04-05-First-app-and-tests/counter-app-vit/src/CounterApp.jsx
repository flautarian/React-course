import React from 'react'
import { Fragment } from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value );

    const addOne = ( event ) => setCounter((c) => c + 1 );

    const substractOne = ( event ) => setCounter((c) => c - 1 );

    const resetValue = ( event ) => setCounter((c) => c = value);
    
    
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>Valor: { counter } </h2>
            <button onClick={ (event) => addOne( event ) }>+1</button>
            <button onClick={ (event) => substractOne( event ) }>-1</button>
            <button onClick={ (event) => resetValue( event ) }>Reset</button>
        </Fragment>
    )
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}