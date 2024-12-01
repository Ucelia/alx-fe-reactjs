import React from 'react'
import { useState } from 'react'

const initialTodos= [
    {id:1, text: "Do assignment", completed: false},
    {id:2, text: "Learn React", completed: true},
]

function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = (text) =>{
        const newTodoItem={ id: Date.now(), text, completed: false};
        setTodos([...todos, newTodoItem]);
    };
     
    const toggleTodo = (id)=>{
        setTodos(
            todos.map((todo)=>
            todo.id === id ? {...todo, completed: !todo.completed} : todo)
        );
    };

    const deleteTodo =(id)=> {
        setTodos(todos.filter((todo) =>todo.id !== id));
    };

    const handleAddTodo =(e)=>{
        e.preventDefault();
        if(newTodo.trim()){
            addTodo(newTodo);
            setNewTodo("");
        }
    };

    return (
        <div>
          <h1>Todo List</h1>
          <form onSubmit={handleAddTodo}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a todo"
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
                <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TodoList;