import React, { ReactElement } from 'react'

interface Props {

}

export default function MyTop({ }: Props): ReactElement {
  return (
    <div className="my-top">
      <div className="avatar"><img src={require(`../../../image/swipe/hb_03.jpg`)} /></div>
      <span className="my-name">小强</span>
    </div>
  )
}
