import React, { ChangeEvent, useState } from 'react'
import style from './todo.module.scss'

const Todo = () => {
  const [todoValue, setTodoValue] = useState<string>('')

  const handleTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }
  return (
    <div>
      <h1 className={style.header}>오늘 해야 되는 일을 입력하세요!</h1>

      <input
        className={style.todoInput}
        type="text"
        value={todoValue}
        onChange={handleTodo}
      />
    </div>
  )
}

export default Todo
