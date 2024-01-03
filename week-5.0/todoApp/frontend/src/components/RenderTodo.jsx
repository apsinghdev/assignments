// this component renders the the todos on screen
import { useState } from "react";

export function RenderTodo({ todos }) {
  function markCompleteHandler(todoId) {
    fetch("http://localhost:4000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todoId,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (data) => {
      const res = await data.json();
      alert(res.msg);
    });
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h4>{todo.title}</h4>
            <h4>{todo.description}</h4>
            <button
              onClick={() => {
                markCompleteHandler(todo._id);
              }}
              id={todo._id}
            >
              {todo.completed ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </>
  );
}
