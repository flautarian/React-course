import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    //console.log("message mounted!");
    return () => {
      //console.log("message unmounted!");
    }
  }, [])


  return (
      <h5>User already exists</h5>
  )
}
