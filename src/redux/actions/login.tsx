import * as constants from '../constants'
import axios from 'axios'


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



export const login = (obj: object) => (dispatch: any) => {
  axios.post('http://localhost:3002/api/users/login', obj).then((res) => {
    if (res.data.code === 200) {
      sessionStorage.setItem('username', res.data.username)
      dispatch(login_success(res.data))
    } else {
      dispatch(login_error(res.data.msg))
    }
  })
}

