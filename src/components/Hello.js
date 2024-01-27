import React from 'react'

// expression without jsx
const Hello = () => {
  return React.createElement(
    'div',
    {id: "hello", className: "sample"},
    React.createElement('h1',null,'Hello Anurodh')
  )
}

export default Hello