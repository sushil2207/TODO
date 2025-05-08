import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const CheckboxList = (props) => {

    const[tasks,setTasks] = useState([]);
    useEffect(()=>{
        setTasks( props.items);
    },[])
  

//   console.log(props.items)
  //console.log("items",props.items);
  //const items=useContext(ItemsContext);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [response, setResponse] = useState("");

//   for (let key in tasks) {
//     console.log(tasks[key]._id);
//   }

  tasks.map(task => {
    console.log(task._id)
  });

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id
            ? { ...task, active: task.active === "Y" ? "N" : "Y" }
            : task
        )
      );
  };

  return (
    <>
      <div>
        {tasks.map((task) => (
          <label key={task._id} style={{ display: "block", marginBottom: "10px" }}>
            
            <input type="checkbox" checked={task.active === "Y"} onChange={() => handleToggle(task._id)}/>
            {task.name} ({task.active === "Y" ? "Active" : "Inactive"})
          </label>
        ))}
      </div>
    </>
  );
};

export default CheckboxList;
