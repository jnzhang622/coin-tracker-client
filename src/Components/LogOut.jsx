import React from 'react'

const LogOut = props => {
  props.setUser(null)

 console.log(props)
  return (
    <>
    <h1>You have logged out!</h1>
    </>
  )
}

export default LogOut
