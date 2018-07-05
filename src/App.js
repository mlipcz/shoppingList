import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header/Header'
import Shopping from './containers/Shopping/Shopping'
import History from './containers/History/History'
import store from './store'

import axios from './axios-db'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
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
