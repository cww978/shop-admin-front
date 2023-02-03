import React from 'react'
import Router from './router'
import { HashRouter } from 'react-router-dom'
import '@/styles/theme/theme-default.less'

function App () {
  return (
    <HashRouter>
      <Router></Router>
    </HashRouter>
  )
}

export default App
