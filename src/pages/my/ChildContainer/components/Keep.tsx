import React, { ReactElement, useState } from 'react'

interface Props {
  isClass: boolean,
  list: object[],
  onDel: Function
}


export default function keep(props: Props): ReactElement {

  const { list } = props

  return (
    <div className={props.isClass ? 'keep active' : 'keep'}>
      <ul>
        {
          list.map((item: any, index: number) => {
            return <li key={index}>
              <div>
                <img src={require(`../../../../image/keep/${item.src}.jpg`)} />
              </div>
              <div>
                <span className="summary">{item.summary}</span>
                <h4 className="home-list-title">{item.title}</h4>
                <p className="price">价格：{item.price}</p>
              </div>
              <a className="del" onClick={() => { props.onDel(index) }}>
                <img src={require('../../../../image/keep/del.png')} />
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}
