import React from 'react'

var DisplayCow = ({cow}) => (

  <div>
    {cow !== '' ? <h2>{cow.name}</h2> : null}
    {cow !== '' ? <h3>{cow.description}</h3> : null}
  </div>
)

export default DisplayCow
