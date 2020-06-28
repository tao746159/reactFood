import React, { ReactElement, useState } from 'react'
import MyTop from './my-top/MyTop'
import './index.styl'
import Mycontainer from './MyContainer/Mycontainer'

import { withRouter } from 'react-router-dom'
interface Props {

}
function My(props: Props): ReactElement {
  let [name, setName] = useState('')
  let [text, setText] = useState('')
  let [isTrue, setIstrue] = useState(false)
  const handleSetText = (name: string, text: string) => {
    setName(name = name)
    setText(text = text)
    console.log(text)
    setIstrue(isTrue = true)

  }
  const handleSetNull = () => {
    setName(name = '')
    setText(text = '')
    setIstrue(isTrue = false)
  }

  return (
    <div className="my">
      <MyTop></MyTop>
      <Mycontainer handleSetText={(name: string, text: string) => { handleSetText(name, text) }} name={name} text={text} isShow={isTrue} {...props} handleSetNull={handleSetNull}></Mycontainer>
    </div>
  )
}

export default withRouter(My)