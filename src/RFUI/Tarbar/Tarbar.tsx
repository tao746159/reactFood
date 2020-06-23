import React, { ReactElement, useEffect } from 'react'
import { slash } from './../../utils/RegExp/Slash'
import { withRouter } from 'react-router-dom'
import './index.styl'
interface Props {

}

function Tarbar(props: any): ReactElement {
  useEffect(() => {

    const name = props.location.pathname === '/' ? 'home' : slash(props.location.pathname)
    props.onClick(name)
  }, [])
  let { unselectedTintColor, tintColor, tabBarPosition } = props
  return (
    <div className="tab-bar" style={{ background: `${unselectedTintColor ? unselectedTintColor : '#1A1E27'}` }}>
      {props.children}
    </div >
  )
}
export default withRouter(Tarbar)