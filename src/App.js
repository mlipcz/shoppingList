import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Firebase from 'firebase'

import Header from './components/Header/Header'
import Shopping from './containers/Shopping/Shopping'
import History from './containers/History/History'
import store from './store'

import axios from './axios-db'

import './App.css'

// const renderMergedProps = (component, ...rest) => {
//   const finalProps = { ...rest }
//   return React.createElement(component, finalProps)
// }

// const PropsRoute = ({ component, ...rest }) => {
//   console.log(component)
//   console.log(rest)
//   return (
//     <Route
//       {...rest}
//       render={routeProps => {
//         return renderMergedProps(component, routeProps, rest)
//       }}
//     />
//   )
// }

class App extends React.Component {
  index = 0

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path='/' exact component={Shopping} />
              <Route path='/history' component={History} />
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
    axios.post('https://shoppinglist-48680.firebaseio.com/shoppingHistory.json', {label: '1203mati'}).then(res => console.log('post',res));
    axios.get('/shoppingHistory.json').then(res => {console.log("json",res.data)});
  }
}

export default App
