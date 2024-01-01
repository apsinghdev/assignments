import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}
function Button(params) {
  function buttonOnClick() {
    params.setCount(params.count + 1);
  }
  return <button onClick={buttonOnClick}>count {params.count}</button>;
}

export default App;
