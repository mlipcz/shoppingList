import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ErrorPanel.css'

class ErrorPanel extends Component {
  render () {
    if (this.props.error) {
      const msg = ''+this.props.error;  
      return (
        <div className='errorPanel' onClick={this.props.onClear}>
        <p>
            {msg}
        </p>
        <i>
            Click to try again
        </i>
        </div>
      )
    } else return null
  }
}

const mapStateToProps = store => {
  return {
    error: store.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    onClear: () => {
      dispatch({
        type: 'CLEAR_ERROR'
      })
    }
  }
}

const connectionBuilder = connect(mapStateToProps, mapDispatchToProps)

export default connectionBuilder(ErrorPanel)
