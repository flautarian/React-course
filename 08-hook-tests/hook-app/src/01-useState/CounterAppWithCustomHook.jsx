import { Fragment, useState, React } from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterAppWithCustomHook = ({ value }) => {

    const { valueCounter, changeValue } = useCounter();

    const [inputValue, setInputValue] = useState(1);

    const onInputChange = ({ target }) => {
        setInputValue( Number(target.value) );
    }

    return (
        <Fragment>
            <h4>Counter with custom hook:</h4>
            <h5>Counter 1: {valueCounter.counter1}</h5>
            <h5>Counter 2: {valueCounter.counter2}</h5>
            <h5>Counter 3: {valueCounter.counter3}</h5>
            <hr />
            <button className='btn btn-primary' onClick={() => changeValue([inputValue, inputValue, inputValue])}>+{inputValue}</button>
            <button className='btn btn-primary' onClick={() => changeValue([-inputValue, -inputValue, -inputValue])}>-{inputValue}</button>
            <input
                placeholder="number"
                value={inputValue}
                type="number"
                onChange={ onInputChange }></input>
        </Fragment>
    )
}
