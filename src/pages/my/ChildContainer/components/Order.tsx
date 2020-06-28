import React, { ReactElement, useState } from 'react'

interface Props {
  toplist: object[],
  isClass: boolean,
  orderList: object[],
  handleOrderTab: Function
}

interface State {
  tabItem: string
  num: number
}

export default function Order(props: Props, state: State): ReactElement {
  let [num, setNum] = useState(0)
  const handleTabNum = (num: number) => {
    setNum(num= num)
  }
  return (
    <div className={props.isClass ? 'order active': 'order'}>
      <div className="order-top">
        <ul>
          {
            props.toplist.map((item:any, index) => {
              return <li key={index} className={item.index === num ? 'active' : ''} onClick={() => { handleTabNum(index); props.handleOrderTab(item.name)}}>
                <a>{item.text}</a>
              </li>
            } )
            }
        </ul>
      </div>
      <div className="order-list">
        <ul>
          {
            props.orderList.map((item: any, index: number) => {
              return <li key={index}>
                <div>
                 <img src={require(`../../../../image/keep/${item.src}.jpg`)} />
             </div>
                <div>
                <span className="summary">{item.summary}</span>
                <h4 className="home-list-title">{item.title}</h4>
                <p className="price">价格：{item.price}</p>
              </div>
            
              </li>
            } )
          }
        </ul>
      </div>
    </div>
  )
}
