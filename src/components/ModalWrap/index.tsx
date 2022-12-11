import React from 'react'
import style from './modal.module.scss'

interface Props {
  children: JSX.Element
}
const ModalWrap = ({ children }: Props) => {
  return <div className={style.modalwrap}>{children}</div>
}

export default ModalWrap
