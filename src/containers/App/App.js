import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../../components/Header/Header'
import Shopping from '../../containers/Shopping/Shopping'
import History from '../../containers/History/History'
import ErrorPanel from '../../containers/ErrorPanel/ErrorPanel'
import FinishingPanel from '../../containers/FinishingPanel/FinishingPanel'

import store from '../../redux/store'
import axios from '../../axios-db'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <ErrorPanel/>
            <FinishingPanel/>
            <Switch>
              <Route path='/history' component={History} />
              <Route path='/' exact component={Shopping} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    )
  }

  //   componentDidUpdate = function (prevProps, prevState) {
  //     localStorage.state = JSON.stringify(this.state)
  //   }

  componentWillMount () {
    axios.get('/shoppingHistory.json').then(res => {console.log("json",res.data)});
  }
}

 export default App
