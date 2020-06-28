import React, { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Routes from './router'
const arr = ['/', '/home', '/login', '/register']
interface Props {

}

const RouterInit = (props: Props): ReactElement => {

  return (
    <div>
      {
        Routes.map((item, index) => {
          return <Route key={index} path={item.path} exact component={(props: any): ReactElement => {
            const isAuth = sessionStorage.getItem('username')
            if (arr.some((tom) => tom === item.path) || isAuth) {
              return <item.component {...props} />
            } else {
              return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} />
            }
          }} />
        })
      }
    </div>
  )
}

export default RouterInit