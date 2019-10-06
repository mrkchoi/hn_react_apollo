import React from 'react'

function Test({children}) {

  let render = children();

  return (
    <div>
      {render}
    </div>
  )
}

export default Test
