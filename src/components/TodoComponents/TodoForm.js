import React from "react";

import './TodoForm.scss'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            filter: ""
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

    searchTodo = e => {
        e.preventDefault();
        this.props.searchTodo(this.state.filter)
    }

    render() {
        return (
            <>
                <form onSubmit={this.searchTodo} className='addForm'>
                    <input
                        className='add-input'
                        type="text"
                        value={this.state.filter}
                        name="filter"
                        onChange={this.handleChanges}
                    />
                    <button className="btn">Search</button>
                </form>
                <form onSubmit={this.submitTodo} className='addForm'>
                    <input
                        className='add-input'
                        type="text"
                        value={this.state.todo}
                        name="todo"
                        onChange={this.handleChanges}
                    />
                    <button className="btn">Add</button>
                </form>
            </>
        );
    }
}

export default TodoForm;
