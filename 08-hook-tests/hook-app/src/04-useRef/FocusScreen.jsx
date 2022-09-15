import React, { Fragment, useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const focusInput = () =>{
        inputRef.current.select();
    }

  return (
    <Fragment>
        <h1>Focus Screen</h1>
        <hr/>

        <input ref={inputRef} type='text' placeholder='Insert name' className='form-control'/>

        <button className='btn btn-primary mt-1' onClick={ focusInput }>Focus input</button>
    </Fragment>
  )
}
