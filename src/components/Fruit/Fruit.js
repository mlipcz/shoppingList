import React from 'react'

import './Fruit.css'

const opacityIfAbsent = 0.5

export default props => {
  const myStyle = props.count ? null : { opacity: opacityIfAbsent }

  return (
    <div
      className='container'
      onClick={props.onClick(props.name)}
      style={myStyle}
    >
      <img
        src={'https://i.imgur.com/' + props.file + '.png'}
        className='image'
        alt={props.name}
        title={props.name}
      />
      <div className='number'>{!props.count ? null : props.count}</div>
    </div>
  )
}
