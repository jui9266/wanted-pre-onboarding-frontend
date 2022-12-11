import React, { FormEvent, useEffect, useState } from 'react'

import style from './login.module.scss'
import SignupModal from './SignupModal'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios'

const Login = () => {
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [openSignup, setOpenSignup] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/todo')
    }
  }, [])

  useEffect(() => {
    setErrorMsg('')
  }, [id, pw])

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const emailRex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (id.match(emailRex) != null) {
      const body = {
        email: id,
        password: pw,
      }

      try {
        const res = await axios.post<{ access_token: string }>(
          '/auth/signin',
          body,
        )
        // axios.defaults.headers.common.authorization = res.data.Authorization
        localStorage.setItem('access_token', res.data.access_token)

        navigate('/todo')
      } catch (error) {
        setErrorMsg('이메일 또는 비밀번호를 다시확인해주세요')
      }
    } else {
      setErrorMsg('이메일 형식이 올바르지 않습니다.')
    }
  }

  const toggleSignup = () => {
    setOpenSignup(prev => !prev)
  }
  return (
    <div className={style.logindWrap}>
      {openSignup && <SignupModal toggle={toggleSignup} />}
      <div className={style.logo}>
        <h2>wanted-pre-onboarding</h2>
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleLogin}>
          <input
            className={style.input}
            placeholder="example@gmail.com"
            type="email"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <input
            className={style.input}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
          />
          <p className={style.errorMsg}>{errorMsg}</p>
          <button type="submit" className={style.loginBtn}>
            로그인
          </button>
        </form>
        <div>
          <button onClick={toggleSignup} type="submit" className={style.signup}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
