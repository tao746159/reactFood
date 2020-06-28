import React, { ReactElement } from 'react'
import { connect } from 'react-redux'

import RHeader from '../../../components/RHeader/RHeader'
import Account from './components/Account'
import Keep from './components/Keep'

import { Dispatch } from 'redux'
import Order from './components/Order'

interface Props {
  text: string,
  isShow: boolean,
  name: string,
  handleSetText: Function,
  handleSetNull: Function
}

let list = [
  {
    src: "ms_01",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    price: 88
  },
  {
    src: "ms_02",
    title: "美味羊肉串",
    summary: "美味羊肉串",
    price: 18
  }
];
let topList = [
  {
    name: 'all',
    text: '全部订单',
    index: 0,
  },
  {
    name: 'unpaid',
    text: '未付款订单',
    index: 1
  },
  {
    name: 'completed',
    text: '已完成订单',
    index: 2
  }
]

class ChildContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { isShow, handleSetNull, text } = this.props

    return (
      <div className={isShow ? 'child-container active' : 'child-container'}>
        <RHeader onBack={() => { handleSetNull && handleSetNull('') }} back="back" title={text}></RHeader>
        <Account isClass={text === 'account'}></Account>
        <Keep isClass={text === 'keep'} list={[]} onDel={() => { }}></Keep>
      </div>
    )
  }

}



export default ChildContainer