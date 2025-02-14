import { useState} from 'react'

// create a project that has a button and two titles below. one title represents a random number that gets generated on clicking the button and another title represents a simple name

// the problem here is that each time the state of the number is changing, the above button and name para elements also re-rendering and in react the less the re renders the better. 
// so in order to minimize the re renders I can either push the state down to that element that needs to be re rendered or i can use memo. 

// SOLUTION-1: pushing the state down

// function App() {
  

//   return (
//     <>
//     <HeaderAndButton></HeaderAndButton>
//     <p>my name is bhupendra jogi</p>
//     </>
//   )
// }

// function HeaderAndButton(){
//   const [ number, setNumber] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setNumber(Math.random());
//         }}
//       >click here</button>
//       <p>the random number is {number}</p>
//     </>
//   );
// }

// export default App

// SOLUTION-2: using memo
import { memo } from "react";

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  );
}

const Header = memo(function ({ title }) {
  return <div>{title}</div>;
});

export default App;

