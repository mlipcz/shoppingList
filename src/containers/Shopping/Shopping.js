import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import Fruit from '../../components/Fruit/Fruit'
import products from '../../staticData'

import './Shopping.css'

class Shopping extends React.Component {
  canBeShipped () {
    let total = 0
    for (var k in this.props.basket) { total += this.props.basket[k] }
    return total > 0
  }

  render () {
    const myStyle = this.canBeShipped() ? null : { visibility: 'hidden' }
    return (
      <Fragment>
        <div className='fruitList'>
          {products.map(item => (
            <Fruit
              {...item}
              key={item.name}
              count={this.props.basket[item.name]}
              onClick={this.props.onIncrement}
            />
          ))}
        </div>
        <br clear='both' />
        <div style={{ 'textAlign': 'center' }}>
          <button style={myStyle} onClick={this.props.onFinishShopping}>
            Finish
          </button>
          <button onClick={this.props.onClear}>Clear</button>
        </div>
      </Fragment>
    )
  }
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
        type: 'INCREMENT',
        payload: text
      })
    },
    onFinishShopping: () => {
      dispatch({
        type: 'FINISH'
      })
    },
    onClear: () => {
      dispatch({
        type: 'CLEAR'
      })
    }
  }
}

const connectionBuilder = connect(mapStateToProps, mapDispatchToProps)

export default connectionBuilder(Shopping)
