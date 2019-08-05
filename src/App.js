import React from 'react';

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

import './App.scss'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        else {
          return todo
        }
      })
    })
  }
  
  clearSelected = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className='container'>
        <h2 className='header'>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearSelected={this.clearSelected}
        />
        <div className='btns'>
          <button className="clear-btn" onClick={this.clearSelected}>
            Clear Selected
          </button>
          <TodoForm addTodo={this.addTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
