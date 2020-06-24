import React, { ReactElement, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { login } from '../../redux/actions/login'
import './index.styl'
import RTinput from '../../RFUI/form/RFinput/RFinput'
import RTbtton from '../../RFUI/form/RFbutton/RFbutton'
import { Link, withRouter, Redirect } from 'react-router-dom'

const loginImg = require('../../image/other/weixiao.png')
const loginpassImg = require('../../image/other/qinzui.png')

interface Props {
  login: Function,
  state: any,
  location: any,
  history: any
}

function Login(props: Props): ReactElement {
  let [username, setActive] = useState('')
  let [password, setPassword] = useState('')
  let [isTrue, setIsTrue] = useState(false)
  const handleOnsumit = () => {
    if (username !== '' && password !== '') {
      props.login({ username: username, password: password })


    }
  }

  return (
    <div className="login">
      {props.state.login.isAuth ? <Redirect to={props.location.state ? props.location.state.from : '/'} /> : ''}
      <p className="loing-register">还没有账号，<Link to="/register">立即注册</Link></p>
      <div className="login-top">
        <img src={loginImg} alt="" />
      </div>
      <div className="login-content">

        <div className="login-tab-cont">
          <div className='login-tab-phone'>

            <form>
              <ul>
                <li>
                  <RTinput placeholder="请输入手机号或邮箱" value={username} handleNameChange={(value: any) => { setActive(username = value) }} ></RTinput>
                </li>
                <li>
                  <RTinput type="password" value={password} placeholder="请输入密码" handleNameChange={(value: any) => { setPassword(password = value) }}></RTinput>
                </li>
                <li>
                  <RTbtton type="green" onNickBtn={handleOnsumit}>登 录</RTbtton>
                </li>
              </ul>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    state
  }
}
const mapDispatchProps = (dispatch: any) => {
  return {
    login: (obj: object) => { dispatch(login(obj)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Login))