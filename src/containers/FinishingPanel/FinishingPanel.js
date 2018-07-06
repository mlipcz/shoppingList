import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FinishingPanel.css'

class FinishingPanel extends Component {
  render () {
    if (this.props.finished) {
      return (
        <div className='finishingPanel' onClick={this.props.onClear}>
          <p>
            Your request has been registered successfully.
          </p>
          <p>
            Click to return
          </p>
        </div>
      )
    } else return null
  }
}

const mapStateToProps = store => {
  return {
    finished: store.finished
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

export default connectionBuilder(FinishingPanel)
