import React, { ReactElement, useState, useEffect } from 'react'

import './index.styl'
interface Props {

  children?: any,
  type?: string,
  duration?: number
}

export default function Confirm(props: Props): ReactElement {
  let [isShow, setisShow] = useState(false)



  return (
    <div className={`active confirm ${props.type}`}>
      <img src={require(`../../image/ui/${props.type}_tanhao.png`)} />
      {props.children}
    </div>
  )
}
