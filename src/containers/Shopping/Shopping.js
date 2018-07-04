import React from 'react'

import Fruit from '../../components/Fruit/Fruit'
import './Shopping.css'

const fruit = [
  { name: 'pear', file: 'nigRCFX' },
  { name: 'tomato', file: 'EnmIQSH' },
  { name: 'strawberry', file: '6DVDOCz' }
]

class Shopping extends React.Component {
  render () {
    return (
      <div>
        {fruit.map(item => (
          <Fruit {...item} key={item.name} />
        ))}
      </div>
    )
  }
}

export default Shopping
