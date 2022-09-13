import React, { Fragment, useEffect, useRef } from 'react'
import { useState } from 'react';
import { useLayoutEffect } from 'react'

export const QuoteComponent = ({ data }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [data])

    return (
        <Fragment>
            <blockquote  className='blockquote text-start' style={{ display: 'flex' }}>
                <p ref={pRef} className='mb-1'>{data.quote} - {data.author}</p>

                <footer className='blockquote-footer'> footer </footer>
            </blockquote>
            <code>{ JSON.stringify(boxSize) }</code>
            <hr/>
        </Fragment>
    )
}
