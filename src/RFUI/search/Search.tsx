import React, { ReactElement, useState, useEffect } from 'react'

import RHeader from '../../components/RHeader/RHeader'
import { Trim } from '../../utils/RegExp/Slash'
import './index.styl'
interface Props {
  btnText?: string,
  btnIcon?: string,
  trim?: boolean,
  clear?: boolean,
  defaultText: string,
  onClick: Function
}

export default function Search(props: Props): ReactElement {
  let [inputText, setInputText] = useState('')
  const handleChange = (event: any) => {
    if (props.trim) {
      setInputText(inputText = Trim(event.target.value))
    } else {
      setInputText(inputText = event.target.value)
    }

  }
  const handleClear = () => {
    setInputText(inputText = '')
  }
  useEffect(() => {
    if (props.defaultText !== '') {
      setInputText(inputText = props.defaultText)
      handleSearch()
    }
  }, [props.defaultText])

  const handleSearch = () => {
    if (inputText === '') {
      console.log('内容不能为空')
    } else {
      console.log(1)
      props.onClick(inputText)
    }
  }
  return (
    <div className="search-warp">
      <RHeader title="分类"></RHeader>
      <div className={props.btnIcon ? 'search icon' : 'search'}>
        <div className="input-warp">
          <input type="text" value={inputText} onChange={handleChange} />
          {
            props.clear ? <a className={inputText.length > 0 ? 'btn-clear' : 'btn-clear hide'} onClick={handleClear}> X </a> : ''
          }
        </div>
        {
          props.btnText ? <a className="btn-text" onClick={handleSearch}>{props.btnText}</a> : ''
        }
        {
          props.btnIcon ? <a className="btn-img" onClick={handleSearch}><img src={require(`./../../image/tarbar/search.png`)} /></a> : ""
        }
      </div>
    </div>
  )
}
