import React, { ReactElement, useState, useEffect } from 'react'

import RTinput from '../../RFUI/form/RFinput/RFinput'
import RTbtton from '../../RFUI/form/RFbutton/RFbutton'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../../redux/actions/login'
const loginImg = require('../../image/other/weixiao.png')
const loginpassImg = require('../../image/other/qinzui.png')
interface Props {
  register: Function,
  state: any
}

function Register(props: Props): ReactElement {
  let [active, setActive] = useState('phone')
  let [phone, setPhone] = useState('')
  let [password, setPassword] = useState('')
  let [passwordTwo, setPasswordTwo] = useState('')
  let [redir, setRedir] = useState('')
  const handleRegister = () => {
    if (phone !== '' && password !== '') {
      if (password === passwordTwo) {
        let obj = Object.assign({}, { username: phone, password: password })
        props.register(obj)


      }
    }
  }
  useEffect(() => {
    setRedir(redir = props.state.login.redirectTo)

  }, [props.state.login.redirectTo])
  return (

    <div className="login">
      {redir ? <Redirect to={props.state.login.redirectTo} /> : ''}
      <p className="loing-register">已有账号，<Link to="/login">立即登录</Link></p>
      <div className="login-top">
        <img src={loginImg} alt="" />
      </div>
      <div className="login-content">
        <div className="login-tab">
          <a className={active === 'phone' ? 'active' : ''} onClick={() => { setActive(active = 'phone') }}>手机号注册</a>
          <a className={active === 'email' ? 'active' : ''} onClick={() => { setActive(active = 'email') }}>邮箱注册</a>
        </div>
        <div className="login-tab-cont">
          <div className={active === 'phone' ? 'login-tab-phone' : 'login-tab-phone hide'}>
            <form>
              <ul>
                <li>
                  <RTinput leftText="手机号：" value={phone} handleNameChange={(value: string) => { setPhone(phone = value) }}></RTinput>
                </li>
                <li>
                  <RTinput type="password" value={password} leftText="密码：" handleNameChange={(val: string) => { setPassword(val) }}></RTinput>
                </li>
                <li>
                  <RTinput type="password" value={passwordTwo} leftText="确认密码：" handleNameChange={(val: string) => { setPasswordTwo(passwordTwo = val) }}></RTinput>
                </li>
                <li>
                  <RTbtton type="green" onNickBtn={() => { handleRegister() }}>注 册</RTbtton>
                </li>
              </ul>
            </form>
          </div>
          <div className={active === 'email' ? 'login-tab-email' : 'login-tab-email hide'}>
            <li>
              <RTinput leftText="邮箱：" value={phone} handleNameChange={(val: string) => { setPhone(phone = val) }}></RTinput>
            </li>
            <li>
              <RTinput type="password" leftText="密码：" value={password} handleNameChange={(val: string) => { setPassword(password = val) }}></RTinput>
            </li>
            <li>
              <RTinput type="password" leftText="确认密码：" value={passwordTwo} handleNameChange={(val: string) => { setPasswordTwo(passwordTwo = val) }}></RTinput>
            </li>
            <li>
              <RTbtton type="green" onNickBtn={() => { handleRegister() }}>注 册</RTbtton>
            </li>
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
    register: (obj: object) => { dispatch(register(obj)) }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Register)