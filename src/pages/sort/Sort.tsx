import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'

import Search from '../../RFUI/search/Search'
import Nothing from '../../components/nothing/Nothing'
import SearchList from './components/SearchList'
import './index.styl'
interface State {
  list: object[],
  popList: object[]
}
interface Props {

}

let popList = [
  {
    name: 'xiangcai',
    text: '湘菜',
    id: 0
  },
  {
    name: 'yuecai',
    text: '粤菜',
    id: 1
  },
  {
    name: 'lucai',
    text: '鲁菜',
    id: 2
  },
  {
    name: 'chuancai',
    text: '川菜',
    id: 3
  },
  {
    name: 'sucai',
    text: '苏菜',
    id: 4
  },
  {
    name: 'zhecai',
    text: '浙菜',
    id: 5
  },
  {
    name: 'huicai',
    text: '徽菜',
    id: 6
  },
  {
    name: 'mincai',
    text: '闽菜',
    id: 7
  }
]



export default function Sort({ }: Props, state: State): ReactElement {
  let [list, setList] = useState([])
  let [text, setText] = useState('')
  const handleTabText = (text: string) => {
    setText(text = text)
    axios.post('http://localhost:3002/api/search', { text: text }).then(res => {
      const data = res.data
      if (data.code === 200) {
        setList(list = data.list)
      }
    })
  }



  return (
    <div className="search-sort">
      <div className="search-top">
        <Search btnText="搜索" clear={true} defaultText={text} onClick={handleTabText}></Search>
        <div className="search-list">
          <span>热门搜索：</span>
          <div className="pop-list">
            <ul>
              {
                popList.map((item: any, index) => {
                  return <li key={index} onClick={() => { handleTabText(item.text) }}>{item.text}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="search-con">
        {
          list.length > 0 ? <SearchList searchList={list}></SearchList> : <Nothing img='kulian' errText="抱歉哦，没有搜索到相关内容！"></Nothing>
        }
      </div>
    </div>
  )
}
