import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addTodo = () => {
    if (text) {
      axios
        .post("http://localhost:5000/api/todos", { text })
        .then((response) => setTodos([...todos, response.data]))
        .catch((error) => console.log(error));
      setText("");
    }
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h2>You have {todos.length} Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id} className="todo-item">
              {todo.text}
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo._id)}>
                ✖
              </button>
            </li>
          ))}
        </ul>
        <div className="add-todo">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Item"
          />
          <button onClick={addTodo}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
