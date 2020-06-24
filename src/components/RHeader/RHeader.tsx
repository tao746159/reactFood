import React, { ReactElement } from 'react'
import './index.styl'
interface Props {
  title: string,
  back?: string,
  cart?: string,
  onBack?: Function
}

export default function RHeader(props: Props): ReactElement {
  const { title, back, cart } = props
  return (
    <div className="r-header">
      {
        back ? <a className="hreder-back" onClick={() => {props.onBack && props.onBack()}}> &lt; </a> : ''
      }
      <span> {title}</span>
      {
        cart ? <a className="hreder-cart"> 购物车 </a> : ''
      }
    </div>
  )
}
