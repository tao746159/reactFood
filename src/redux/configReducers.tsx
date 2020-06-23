import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { loginReducer } from './reducers/login-reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducer = combineReducers({
  login: loginReducer
})

export default function () {
  const store = createStore(reducer, applyMiddleware(thunk, logger))
  return store
}