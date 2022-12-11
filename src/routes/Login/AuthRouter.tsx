import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const AuthRouter = () => {
  const [auth, setAuth] = useState<boolean>(true)

  useEffect(() => {
    if (!localStorage.getItem('access_token')) setAuth(false)
  })

  return <>{auth ? <Outlet /> : <Navigate to="/" replace />}</>
}

export default AuthRouter
