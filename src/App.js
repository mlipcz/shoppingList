import './App.css'
import React, { Fragment } from 'react'
import Header from './components/Header/Header'
import Shopping from './containers/Shopping/Shopping'
import History from './containers/History/History'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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

//   constructor (props) {
//     super()
//     this.state = localStorage.state == undefined
//       ? {
//         list: [],
//         selectedOption: 'All',
//         index: 0
//       }
//       : JSON.parse(localStorage.state)
//   }

  render () {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path='/' exact component={Shopping} />
            <Route path='/history' component={History} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

//   componentDidUpdate = function (prevProps, prevState) {
//     localStorage.state = JSON.stringify(this.state)
//   }
}

export default App
