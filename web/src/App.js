
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [todos, setTodos]=useState([]);

  useEffect(() => {
    fetch("여기에 백엔드 api 링크")
    .then(response => response.json())
    .then(data => {
      setTodos(data);
    })
    .catch(error =>{
      console.error("Error fetching todos:", error);
    });
  }, []);

  return (
    <div className="App">
       <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
