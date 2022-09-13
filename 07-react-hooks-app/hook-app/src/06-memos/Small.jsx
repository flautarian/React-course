import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log("regenerated");
    return (
        <small>{value}</small>
    )
})
