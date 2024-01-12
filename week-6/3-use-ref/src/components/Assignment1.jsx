import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
const inputRef = useRef();
// useEffect will be executed when the component will mount
// why using useEffect? - coz we dont read and write ref directly in the component
// its given an empty dependency arr so that it executes only one in first render
    useEffect(() => {
        inputRef.current.focus();
    }, []);
// second condition was to focus when the button is clicked
    const handleButtonClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            {/* in order to set ref of an dom elem we use ref attribute */}
            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
