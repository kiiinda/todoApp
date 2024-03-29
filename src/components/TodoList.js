import React from 'react'

import Todo from './Todo.js'

function TodoList({todos, setTodos}) {
  //console.log(todos)
  return (
    <div className = "todo-container">
        <ul className='todo-list'> 
        {todos.map(todo => (
          <Todo 
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          todo={todo}
          text={todo.text} 
          />
        )
        )}
        </ul>
       
    </div>
  )
}

export default TodoList