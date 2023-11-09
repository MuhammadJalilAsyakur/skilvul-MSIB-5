import React from 'react'
import { useSelector } from 'react-redux';


function Todolist() {
    const {todos} = useSelector((state) => state.todo);
    console.log(todos)

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>{todo.value}</span>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            ))}
        </div>
    )
}

export default Todolist;
