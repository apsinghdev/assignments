// this component renders the the todos on screen

export function RenderTodo({todos}) {
  return (
    <>
     {todos.map((todo)=>{
        return (
          <>
            <h4>{todo.title}</h4>
            <h4>{todo.description}</h4>
            <button>{todo.completed == true ? 'completed':'Mark as complete'}</button>
          </>
        );
     })}
    </>
  );
}
