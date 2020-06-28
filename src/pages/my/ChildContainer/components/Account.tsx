import React, { ReactElement, useState } from 'react'

interface Props {
  isClass: boolean
}
interface State {
  list: object[]
}
const list = [
  {
    name: 'username',
    text: '用户名',
    isTrue: false
  },
  {
     name: 'setPassword',
    text: '修改密码',
    isTrue: true
  },
  {
     name: 'phone',
    text: '手机号码',
    isTrue: true
  }
]

export default function Account(props:Props, State:object): ReactElement {
  let [arr,setArr] = useState(list)
  let [name,setName] = useState('username')
  return (
    <div className={props.isClass? 'account active' : 'account'}>
      <ul>
        {
          arr.map((item, index) => {
            return <li key={index}> <a> <div><span>{item.text}</span> <span> {item.isTrue ? '>'  : <b>{name}</b>}  </span></div> </a> </li>
          } )
        }
      </ul>
    </div>
  )
}
