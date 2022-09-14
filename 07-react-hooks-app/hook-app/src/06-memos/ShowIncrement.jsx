import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {

    //console.log("recharged!");

    return (
        <button className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}
        >Increment
        </button>
    )
})
