import React, { ReactElement, useState, useEffect } from 'react'

import './index.styl'
interface Props {
  type?: string,
  leftText?: string,
  leftIcon?: string,
  handleNameChange: Function,
  handleValid?: Function,
  reset?: boolean,
  placeholder?: string,
  rule?: [string, { require: boolean, message: string }]
  value?: string
}

export default function RTinput(props: Props): ReactElement {
  let [value, setValue] = useState('')
  let [isTrue, setIstrue] = useState(true)
  useEffect(() => {
    handleReset()
  }, [props.reset])

  const handleChange = (e: any) => {
    setValue(value = e.target.value);
    value === '' ? setIstrue(isTrue = false) : setIstrue(isTrue = true)

    props.handleNameChange(e.target.value)
  }
  const handleReset = () => {
    setValue(value = '')
  }
  return (
    <div className="rt-input">
      {props.leftText ? <span>{props.leftText}</span> : ""}
      {props.leftIcon ? <img className="input-icon" /> : ""}
      <input type={props.type ? props.type : 'text'} placeholder={props.placeholder ? props.placeholder : ''} value={props.value} onChange={handleChange} />
      {isTrue ? '' : <p className="error">{props.rule && props.rule[1].message}</p>}
    </div>
  )
}
