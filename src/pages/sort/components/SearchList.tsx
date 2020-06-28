import React, { ReactElement } from 'react'

interface Props {
  searchList: object[]
}

export default function SearchList(props: Props): ReactElement {
  return (
    <div className="searchList">
      <ul>
        {
          props.searchList.map((item: any, index) => {
            return <li key={index}>
              <div className="searchList-image-warp">
                <img src={require(`./../../../image/homelist/${item.src}.jpg`)} />
              </div>
              <div className="searchList-con-warp">
                <h4 className="home-list-title">{item.title}</h4>
                <span className="summary">{item.summay}</span>
                <article className="search-synopsis">{item.synopsis}</article>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}
