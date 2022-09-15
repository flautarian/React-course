import React, { Fragment, useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const onIncrement = useCallback(
      (incrValue) => {
        setCounter((value) => value+incrValue);
      },
      [],
    )

    return (
        <Fragment>
            <div>Use callbackHook: {counter}</div>
            <hr />
            <ShowIncrement increment={onIncrement} />
        </Fragment>
    )
}
