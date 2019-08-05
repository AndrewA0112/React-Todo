import React from "react";

import './TodoForm.scss'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTodo = e => {
        e.preventDefault();
        if(this.state.todo !== ''){
            this.props.addTodo(this.state.todo);
            this.setState({
                todo: ''
            })
        }
        else {
            alert('No input found!')
        }
    };

    render() {
        return (
                <form onSubmit={this.submitTodo} className='addForm'>
                    <input
                        className='add-input'
                        type="text"
                        value={this.state.todo}
                        name="todo"
                        onChange={this.handleChanges}
                    />
                    <button className="add-btn">Add</button>
                </form>
        );
    }
}

export default TodoForm;
