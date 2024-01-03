// this component creates the todos
import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function clickHandler() {
    fetch("http://localhost:4000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async (data) => {
      const response = data.json();
      alert("todo added");
    });
  }
  return (
    <>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const titleValue = e.target.value;
          setTitle(titleValue);
        }}
      ></input>
      <br></br>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const descValue = e.target.value;
          setDescription(descValue);
        }}
      ></input>
      <br></br>
      <button onClick={clickHandler} style={{ padding: 10, margin: 10 }}>
        Add todo
      </button>
    </>
  );
}
