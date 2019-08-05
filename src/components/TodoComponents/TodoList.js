import React from 'react'

import Todo from './Todo'

import './TodoList.scss'

const TodoList = props => {
    return (
        <div className='todos'>
            {
                props.todos.map(todo => {
                    return <Todo
                                key={todo.id}
                                todo={todo}
                                toggleTodo={props.toggleTodo}
                            />
                })
            }
        </div>
    )
}

export default TodoList;