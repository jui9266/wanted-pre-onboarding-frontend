import { Route, Routes } from 'react-router'
import Login from './routes/Login'
import style from './app.module.scss'
import React, { useEffect } from 'react'
import Todo from './routes/Todo'
import AuthRouter from './routes/Login/AuthRouter'

function App() {
  return (
    <div className={style.app}>
      <div className={style.wrap}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AuthRouter />}>
            <Route path="/todo" element={<Todo />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
