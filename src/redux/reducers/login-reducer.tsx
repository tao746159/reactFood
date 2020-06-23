import { LOGIN_CONSTANT, LOGIN_ERROR, LOGIN_OUT_CONSTANT, REGISTER_CONSTANT } from '../constants'
import { loginface } from '../actions/login'

const initState = {
  isAuth: false,
  username: '',
  msg: '',
  redirectTo: ''
}

export const loginReducer = (state = initState, action: loginface) => {
  switch (action.type) {
    case LOGIN_CONSTANT:
      return { ...state, isAuth: true, msg: '', action }
    default:
      return state
  }
}