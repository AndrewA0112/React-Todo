import React from 'react'

import Todo from './Todo'

import './TodoList.scss'

const TodoList = props => {
    if(props.todos === null || props.todos === []) {
        return (
            <div className='empty'>
                <h4>No Todos Found</h4>
            </div>
        )
    }
    else {
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
}

export default TodoList;