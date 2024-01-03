import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { RenderTodo } from "./components/RenderTodo";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([]);
  fetch("http://localhost:4000/todos").then(async (res) => {
    const data = await res.json();
    setTodos(data);
  });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <RenderTodo todos={todos}></RenderTodo>
    </div>
  );
}

export default App;
