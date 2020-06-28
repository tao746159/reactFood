import React, { ReactElement } from 'react'

import './index.styl'
interface Props {
  img?: string,
  errText?: string
}

export default function Nothing(props: Props): ReactElement {
  return (
    <div className="nothing">
      <div className="nothing-img">
        <img src={require(`../../image/other/${props.img}.png`)} />
      </div>
      <span>{props.errText}</span>
    </div>
  )
}
