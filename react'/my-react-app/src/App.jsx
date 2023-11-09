import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter/counter'
import Login from './components/login/login'
import Login2 from './components/login2/login2'
import MyComponent from './components/listhewan/listhewan'
import Listpoke from './components/poke/list-poke'
import {Routers, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
      <nav>
        <ul>
          <li><link to="/">home</link></li>
          <li></li>
        </ul>
      </nav>

      <Routers>
        <Route path="/login" component={Login} />
        <Route path="/login2" component={Login2} />
        <Route path="/counter" component={Counter} />
        <Route path="/listhewan" component={MyComponent} />
        <Route path="/listpoke" component={Listpoke} />
      </Routers>
    </>
  )
}

function Home() {
  return <h2>Home</h2>
}

export default App
