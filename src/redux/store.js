import { createStore, applyMiddleware } from 'redux'
import asyncDispatchMiddleware from './asyncDispatchMiddleware'
import axios from '../axios-db'

const defaultState = {
  basket: {},
  history: [],
  finishing: false,
  finished: false,
  error: null
}

const increment = (state, action) => {
  let newBasket = { ...state.basket }
  newBasket[action.payload] = state.basket[action.payload]
    ? state.basket[action.payload] + 1
    : 1
  return { ...state, basket: newBasket }
}

const finish = (state, action) => {
  var d = new Date();
  var dateTime = d.toLocaleDateString()+', '+d.toLocaleTimeString();
  axios
    .post('/shoppingHistory.json', {
      basket: state.basket,
      date: dateTime
    })
    .then(res => action.asyncDispatch({ type: "FINISHED", value: res }))
    .catch(err => action.asyncDispatch({ type: "ERROR", value: err }))
  return {...state, finishing: true}
}

const clear = state => {
  return { ...state, basket: {} }
}

const finished = (state) => {
  return { ...state, finished: true, finishing: false, basket: {} }
}

const errorHandler = (state, action) => {
  return { ...state, finishing: false, finished: false, error: action.value }
}

const clearError = (state, action) => {
  return { ...state, finishing: false, finished: false, error: null }
}

const historyLoaded = (state, action) => {
  return { ...state, history: action.payload }
}

const reducer = (state = defaultState, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'INCREMENT':
      return increment(state, action)
    case 'FINISH':
      return finish(state, action)
    case 'CLEAR':
      return clear(state)
    case 'FINISHED':
      return finished(state)
    case 'ERROR':
      return errorHandler(state, action)
    case 'CLEAR_ERROR':
      return clearError(state, action)
    case 'HISTORY_LOADED':
      return historyLoaded(state, action)
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(asyncDispatchMiddleware))

export default store
