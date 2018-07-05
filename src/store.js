import { createStore } from 'redux'
import axios from './axios-db'

const defaultState = {
  basket: {}
}

const increment = (state, action) => {
  let newBasket = { ...state.basket }
  newBasket[action.payload] = state.basket[action.payload]
    ? state.basket[action.payload] + 1
    : 1
  return { ...state, basket: newBasket }
}

const finish = (state, action) => {
  axios.post('https://shoppinglist-48680.firebaseio.com/shoppingHistory.json', {basket: state.basket, date: new Date().toLocaleDateString() }).then(res => console.log('post',res));
  return state;
}

const reducer = (state = defaultState, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'INCREMENT':
    case 'INCREASE':
      return increment(state, action);
    case 'FINISH':
      return finish(state, action);
    default:
      return state
  }
}

const store = createStore(reducer)

export default store
