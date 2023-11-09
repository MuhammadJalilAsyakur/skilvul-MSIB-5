import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducers";

function InputTodoList() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
        dispatch(addTodo(input));
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="kimak"
                />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default InputTodoList;
