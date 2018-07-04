import React from 'react'

export default props => {
  return (
    <img
      src={'https://i.imgur.com/' + props.file + '.png'}
      className='image'
      alt={props.name}
      title={props.name}
    />
  )
}
