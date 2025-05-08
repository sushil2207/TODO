import React, { useState } from "react";

import { useEffect } from "react";

import axios from "axios";

import "./Home.css";
import { data } from "react-router-dom";

const Home = (props) => {
  const [taskData, useData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceHolder] = useState("Add New Task");
  const [getId, setId] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/`);

        useData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const handleToggle = (id, e) => {
    //console.log(e.target.checked)
    // setId((prevId) => setId([...getId,id]))

    setId((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    // useData((prevTasks) =>
    //   prevTasks.map((task) =>
    //     task._id === id
    //       ? { ...task, active: task.active === "Y" ? "N" : "Y" }
    //       : task
    //   )
    // );
  };

  const handleClick = (e) => {
    e.preventDefault();
    // alert(items);

    alert(`You entered: ${inputValue}`);

    axios
      .post("http://localhost:3000/", { name: inputValue, active: "Y" })
      .then((response) => {
        console.log("task added ");
        useData([...taskData, response.data]);
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error adding task ", error);
      });

    // Do something with inputValue
  };

  const updateData =  (e) => {
    e.preventDefault();
    // console.log(getId);
     getId.map((task) =>
        axios.patch(`http://localhost:3000/${task}`, { active: "N" })
      .then((response) =>
        useData(prevTask=> 
            prevTask.map((taskUpdade => (   
                taskUpdade._id === task ? {...taskUpdade,active:"N"}:taskUpdade
            )))
        )
      ).catch((error) => {
        console.error("Error updating task ", error);
      }))

    //   for (const key of  getId){
    //     console.log(key)
    //     axios.patch(`http://localhost:3000/${task}`, { active: "N" })
    //    .then((response) =>
    //      useData([...taskData,response.data])

    //  ).catch((error) => {
    //     console.error("Error updating task ", error);
    //   })
     // }

      
    
  };

  return (
    <div>
      <div className="inputdiv">
        <input
          type="text"
          value={inputValue}
          name="name"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setPlaceHolder("")}
          onBlur={() => setPlaceHolder("Add New Task")}
        />
        <button className="button1" onClick={handleClick}>
          ADD
        </button>
      </div>
      <div>
        {taskData.map((task) => (
          <label key={task._id} className="home">
            <input
              type="checkbox"
              value={task._id}
              //   checked={task.active === "Y"}
              onChange={() => handleToggle(task._id)}
            />
            {task.name} {task.active === "Y" ? "(Acitve)" : "(Completed)"}
          </label>
        ))}
      </div>
      <div className="lastDiv">
        <button className="button2" onClick={updateData}>
          COMPLETED
        </button>
      </div>
    </div>
  );
};

export default Home;
