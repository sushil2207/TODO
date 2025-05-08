import React, { useEffect,useState } from 'react'

import axios from 'axios'

import './Active.css'

const Active = () => {
    const [taskData, useData] = useState([]);
    useEffect(() => {
        const fetchActiveTasks = async() =>{
            const response = await axios.get('http://localhost:3000/active');
            useData(...taskData,response.data)
            
        } 
        fetchActiveTasks()
    },[])

    taskData.map((key) =>
        console.log(key)
    )
  return (
    <>
        <div > 
            {
                taskData.map((key) =>
                
                    <label className='active'>{key.name}</label>
                )
            }
            <label>

            </label>
        </div>
    </>
  )
}

export default Active