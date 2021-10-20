import React from 'react'

var DisplayCow = ({cow}) => (

  <div>
    {cow !== '' ? <h3>{cow.name}</h3> : null}
    {cow !== '' ? <p>{cow.description}</p> : null}
  </div>
)

export default DisplayCow
