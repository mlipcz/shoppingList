import React from 'react';
import { connect } from 'react-redux'
import axios from '../../axios-db'

class History extends React.Component {
    render() {
		console.log('Hist',this.props);
		let a = [];
		for (var k in this.props.shoppingHistory) { a.push(this.props.shoppingHistory[k]) }
		console.log(a);
		if (a.length > 0)
				return (
				<div>
				  {a.map((item,i) => (
				  <p key={i}>
				  {item.date}
					</p>
				  ))}
				</div>
			)
		else
        return (
        <div onClick={this.loadHistory}>
            History
        </div>
        );
    }

  componentWillMount () {
    axios.get('/shoppingHistory.json').then(res => this.props.onHistoryLoaded(res.data)() );
  } 
}

const Item = (props) => {
	<p>
	{props.date}
	</p>
}

const mapStateToProps = store => {
  return {
    shoppingHistory: store.history
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ...ownProps,
    onHistoryLoaded: text => () => {
	  console.log('onHistoryLoaded',text);
      dispatch({
        type: 'HISTORY_LOADED',
        payload: text
      })
    }
  }
}

const connectionBuilder = connect(mapStateToProps, mapDispatchToProps)

export default connectionBuilder(History)