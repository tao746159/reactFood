import React, { ReactElement, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import ChildContainer from '../ChildContainer/ChildContainer'
import RTbtton from '../../../RFUI/form/RFbutton/RFbutton'
import modal from '../../../RFUI/Toast/Toast'
import Confirm from '../../../RFUI/Confirm/Confirm'
interface State {
  list: object[],
  state: string
}
interface Props {
  isShow: boolean,
  text: string,
  name: string,
  handleSetText: Function,
  handleSetNull: Function,
  history?: any
}
let listArray = [
  {
    name: 'account',
    text: '账户安全',
    index: 0
  },
  {
    name: 'address',
    text: '我的收货地址',
    index: 1
  },
  {
    name: 'keep',
    text: '我的收藏',
    index: 2
  },
  // {
  //   name: 'order',
  //   text: '我的订单',
  //   index: 3
  // }
  // },
  // {
  //   name: 'site',
  //   text: '设置',
  //   index: 4
  // }
]
class Mycontainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      list: listArray,
      state: ''
    }
  }
  handleOnOut = () => {
    sessionStorage.removeItem('username')
    modal(Confirm, '退出登录', 'success', 2000)
    this.props.history.push('/login')
  }
  render() {
    const { list } = this.state
    const { handleSetText } = this.props
    return (
      <div className="my-container">
        <ul>
          {
            list.map((item: any, index: number) => {
              return <li key={index}>
                {
                  item.name === 'address' ? <Link to={item.name}><div><span>{item.text}</span><span> &gt; </span></div></Link> : <a onClick={() => { handleSetText(item.text, item.name) }}>
                    <div>
                      <span>{item.text}</span>
                      <span> &gt; </span>
                    </div>
                  </a>
                }
              </li>
            })
          }
        </ul>
        <ChildContainer  {...this.props} name={this.props.name} text={this.props.text}></ChildContainer>
        <RTbtton onNickBtn={this.handleOnOut} size="small" type="warning" >退出</RTbtton>
      </div>
    )
  }

}




export default Mycontainer