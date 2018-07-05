import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Fruit from '../../components/Fruit/Fruit'
import './Shopping.css'

const fruit = [
  { name: 'pear', file: 'nigRCFX', type: 'fruit' },
  { name: 'tomato', file: 'EnmIQSH', type: 'fruit' },
  { name: 'strawberry', file: '6DVDOCz', type: 'fruit' },
  { name: 'cherry', file: 'uSWvDME', type: 'fruit' },
  { name: 'onion', file: 'n2XmtpC', type: 'fruit' },
  { name: 'cucumber', file: 'fIryGji', type: 'fruit' },

  { name: 'feta', file: '7cjghip', type: 'dairy' },
  { name: 'butter', file: 'hRT0VmL', type: 'dairy' },
  { name: 'milk', file: 'hJp6lAA', type: 'dairy' },
  { name: 'ghee', file: 'Oyoa7LM', type: 'dairy' }
]

class Shopping extends React.Component {
  render () {
    console.log(this.props)
    const myStyle = this.props.basket['tomato']
      ? null
      : { visibility: 'hidden' }
    return (
      <Fragment>
        <div className='fruitList'>
          {fruit.map((item, i) => (
            <Fruit
              {...item}
              key={item.name}
              count={this.props.basket[item.name]}
              onClick={this.props.onIncrement}
            />
          ))}
        </div>
        <br clear='both' />
        <MyButton style={myStyle} onClick={this.props.onFinishShopping} />
      </Fragment>
    )
  }
}

const MyButton = props => {
  console.log(props)
  return (
    <button onClick={props.onClick} style={{ visibility: 'show' }}>
      Finish
    </button>
  )
}

const mapStateToProps = store => {
  return {
    basket: store.basket
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    onIncrement: text => () => {
      dispatch({
        type: 'INCREASE',
        payload: text
      })
    },
    onFinishShopping: () => {
      dispatch({
        type: 'FINISH'
      })
    }
  }
}

const connectionBuilder = connect(mapStateToProps, mapDispatchToProps)

export default connectionBuilder(Shopping)
