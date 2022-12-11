import React from 'react'
import style from './emptyData.module.scss'

const EmptyData = () => {
  return (
    <div className={style.emptyWrap}>
      <p className={style.emptyText}>저장된 기록이 없습니다.</p>
    </div>
  )
}

export default EmptyData
