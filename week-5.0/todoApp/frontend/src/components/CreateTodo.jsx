// this component creates the todos 

export function CreateTodo(){
    return (
      <>
        <input style={{padding: 10, margin: 10}} type="text" placeholder="title"></input>
        <br></br>
        <input style={{padding: 10, margin: 10}} type="text" placeholder="description"></input>
        <br></br>
        <button style={{padding: 10, margin: 10}}>Add todo</button>
      </>
    );
}