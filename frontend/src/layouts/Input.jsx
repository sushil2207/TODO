import { useContext, useState } from "react";
import React from "react";
import './Input.css';


const Input = () => {
    // let items =useContext(ItemsContext)
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // alert(items);
    alert(`You entered: ${inputValue}`);
    // Do something with inputValue
  };
  return (
    <div className="inputdiv">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..." 
      />
      <button onClick={handleClick} >
        ADD
      </button>
    </div>
  );
};

export default Input;
