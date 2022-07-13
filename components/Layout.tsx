import React from 'react'
import layout from '../styles/Layout.module.css'
import Header from './Header'
import Main from './Main'
import Circle from './Circle'

const Layout = ({children}: any) => {
  return (
    <div className={layout.container}>
      <Header />
      <Main />
      <Circle />
    </div>
  )
}

export default Layout