import React, { ReactElement } from 'react'
import iScroll from 'iscroll/build/iscroll-probe'
import IscrollLuo from "iscroll-luo";

export default function Scroll(props: any): ReactElement {
  return (
    <IscrollLuo id="test" noDown={true} noUp={true} detectionHeight={true}>
      {props.children}
    </IscrollLuo>
  )
}
