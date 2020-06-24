import React from 'react'

import Home from '../pages/home/Home'
import Sort from '../pages/sort/Sort'
import Foodie from '../pages/foodie/Foodie'
import My from '../pages/my/My'
import Login from '../pages/login/Login'
import Register from '../pages/login/Register'
import Address from '../pages/address/Address'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/home', name: 'home', component: Home },
  { path: '/sort', name: 'sort', component: Sort },
  { path: '/foodie', name: 'foodie', component: Foodie },
  { path: '/my', name: 'my', component: My },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/address', name: 'address', component: Address },
]