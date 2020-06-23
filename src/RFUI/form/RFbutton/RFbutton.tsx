import React, { ReactElement } from 'react'
import './index.styl'

interface Props {
  children: any,
  size?: string,
  type?: string,
  disabled?: any,
  onNickBtn?: any
}



export default function RTbtton(props: Props): ReactElement {
  return (
    <div className={props.size ? `${props.size} btn-warp` : "btn-warp"} >
      <button className={props.type ? `${props.type}` : ``} onClick={props.onNickBtn ? props.onNickBtn : ""} type="button" disabled={props.disabled ? true : false}>{props.children}</button>
    </div>
  )
}
