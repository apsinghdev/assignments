import { useState, useMemo } from "react";



export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    
    const expensiveValue = useMemo(()=>{
        let result;
        function getFactorial(n){
            if ( n === 0 || n === 1){
                result = 1;
            } else {
                result = n*(getFactorial(n-1))
            }
            return result;
        }
        return getFactorial(input);
    },[input]); 
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.