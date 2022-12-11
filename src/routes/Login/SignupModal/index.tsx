import React, { FormEvent, useState } from 'react'
import axios from '../../../api/axios'
import ModalWrap from '../../../components/ModalWrap'
import style from './signupModal.module.scss'

interface Props {
  toggle: () => void
}

const SignupModal = ({ toggle }: Props) => {
  const [email, setEmail] = useState<string>('')
  const [pw, setPw] = useState<string>('')
  const [confirmPw, setConfirmPw] = useState<string>('')

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = {
      email,
      password: pw,
    }
    try {
      await axios.post<{ access_token: string }>('/auth/signup', body)

      toggle()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalWrap>
      <div className={style.inner}>
        <div className={style.head}>
          <p className={style.title}>회원가입</p>
          <button className={style.closeBtn} type="button" onClick={toggle}>
            X
          </button>
        </div>
        <form onSubmit={handleSignup}>
          <input
            className={style.input}
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            className={style.input}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
          />
          <input
            className={style.input}
            placeholder="비밀번호를 한번더 입력해주세요. ."
            type="password"
            value={confirmPw}
            onChange={e => setConfirmPw(e.target.value)}
          />
          <button type="submit" className={style.signup}>
            회원가입
          </button>
        </form>
      </div>
    </ModalWrap>
  )
}

export default SignupModal
