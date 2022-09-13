import React, { Fragment, useState } from 'react';
import { useMemo } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Here we go!!");
    }

    return `${iterationNumber} iterations generated`
}

export const MemoHook = () => {

    const [show, setShow] = useState(true);

    const { valueCounter, changeValue } = useCounter(0);

    const memorizedValue = useMemo(() => heavyStuff(valueCounter.counter2 + 500), [valueCounter]);

    return (
        <Fragment>
            <h2>Counter: <small>{valueCounter.counter2}</small></h2>
            <hr />

            <h4>{memorizedValue} </h4>

            <button
                className='btn btn-primary'
                onClick={() => changeValue([1, 1, 1])}> +1 </button>

            <button
                className='btn btn-primary'
                onClick={() => setShow(!show)}> Show/Hide </button>
        </Fragment>
    )
}
