import React, { ReactElement } from 'react'

import './index.styl'
interface Props {
  list: any[]
}

export default function HomeList(props: Props): ReactElement {
  const { list } = props
  return (
    <div className="home-list-warp">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <img src={require(`./../../../image/homelist/${item.src}.jpg`)} />
              <span className="summary">{item.summary}</span>
              <h4 className="home-list-title">{item.title}</h4>
              <article className="synopsis">{item.synopsis}</article>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
