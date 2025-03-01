import React, { useState } from 'react'; 
import './index.css';   

function TodoApp() {   
  const [todos, setTodos] = useState([]);   
  const [newTodo, setNewTodo] = useState('');    

  const handleAddTodo = () => {     
    if (newTodo.trim()) {       
      setTodos([...todos, newTodo]);       
      setNewTodo('');     
    }   
  };    

  const handleDeleteTodo = (index) => {     
    const updatedTodos = todos.filter((_, i) => i !== index);     
    setTodos(updatedTodos);   
  };    

  return (     
    <div className="todo-container">       
      <h1>Todo List</h1>       
      <input         
        type="text"         
        value={newTodo}         
        onChange={(e) => setNewTodo(e.target.value)}         
        placeholder="Add a new task"       
      />       
      <button className="add-btn" onClick={handleAddTodo}>Add</button>
      <ul id="todo-list">         
        {todos.map((todo, index) => (           
          <li key={index}>             
            {todo}             
            <button               
              className="remove-btn"               
              onClick={() => handleDeleteTodo(index)}             
            >               
              Delete             
            </button>           
          </li>         
        ))}       
      </ul>     
    </div>   
  ); 
}

export default TodoApp;
