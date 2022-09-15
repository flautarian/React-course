import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react'

export const CounterApp = ({ value }) => {

    const [valueCounter, setValueCounter] = useState({
        counter1: value + 5,
        counter2: value,
        counter3: value - 5
    });

    return (
        <Fragment>
            <h4>Counter with hook:</h4>
            <h5>Counter 1: {valueCounter.counter1}</h5>
            <h5>Counter 2: {valueCounter.counter2}</h5>
            <h5>Counter 3: {valueCounter.counter3}</h5>
            <hr />
            <button className='btn btn-primary' onClick={() => {
                setValueCounter({
                    counter1: valueCounter.counter1 + 1,
                    counter2: valueCounter.counter2 + 1,
                    counter3: valueCounter.counter3 + 1
                });
            }}>+1</button>

            <button className='btn btn-primary' onClick={() => {
                setValueCounter({
                    counter1: valueCounter.counter1 - 1,
                    counter2: valueCounter.counter2 - 1,
                    counter3: valueCounter.counter3 - 1
                });
            }}>-1</button>
        </Fragment>
    )
}
