import React, { Fragment, useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

    const [show, setShow] = useState(true);

    const { valueCounter, changeValue } = useCounter(0);

    return (
        <Fragment>
            <h2>Counter: <Small value={valueCounter.counter2} /></h2>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => changeValue([1, 1, 1])}> +1 </button>

            <button
                className='btn btn-primary'
                onClick={() => setShow(!show)}> Show/Hide </button>
        </Fragment>
    )
}
