import React, { ReactElement } from 'react'
import { Router, Link } from 'react-router-dom'

interface Props {
  router: string,
  isSelecd: boolean,
  onPren: any,
  title: string,
  icon: object,
  activeIcon: object
}

export default function TarberItem(props: Props): ReactElement<any> {
  return (

    <div className="tab-bar-item">
      <Link
        onClick={props.onPren}
        className={props.isSelecd ? 'active' : ''}
        to={props.router}
      >
        {props.isSelecd ? props.activeIcon : props.icon}
        <span className="tab-title">{props.title}</span>
      </Link>
    </div>
  )
}
