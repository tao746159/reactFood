import * as constants from '../constants'
import axios from 'axios'
import modal from '../../RFUI/Toast/Toast'

import Confirm from '../../RFUI/Confirm/Confirm'

export interface loginface {
  type: string,
  payload: (string | object)
}

export const login_success = (usernmae: string): loginface => {
  return {
    type: constants.LOGIN_CONSTANT,
    payload: usernmae
  }
}


export const login_error = (msg: string): loginface => {
  return {
    type: constants.LOGIN_ERROR,
    payload: msg
  }
}

export const register_success = () => {
  return {
    type: constants.REGISTER_CONSTANT
  }
}


export const login = (obj: object) => (dispatch: any) => {
  axios.post('http://localhost:3002/api/users/login', obj).then((res) => {
    console.log(res.data)
    if (res.data.code === 200) {
      sessionStorage.setItem('username', res.data.username)
      modal(Confirm, '登录成功', 'success', 2000)
      dispatch(login_success(res.data))
    } else {
      console.log(res.data.data.msg)
      modal(Confirm, res.data.data.msg, 'error', 2000)
      dispatch(login_error(res.data.msg))
    }
  })
}

export const register = (obj: object) => (dispatch: Function) => {
  axios.post('http://localhost:3002/api/users/register', obj).then((res) => {
    if (res.data.code === 200) {
      dispatch(register_success())
      modal(Confirm, '注册成功', 'success', 2000)
    } else {
      modal(Confirm, res.data.msg, 'error', 2000)
      dispatch(login_error(res.data.msg))
    }
  })
}