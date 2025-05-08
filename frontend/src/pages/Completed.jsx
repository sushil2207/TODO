import React, { useEffect, useState } from 'react'

import axios from 'axios';

import './Completed.css'

const Completed = () => {

    const[taskData,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            const respone = await axios.get('http://localhost:3000/completed');

            setData(respone.data);


        }

        fetchData()
    },[])
  return (
    <div>
        {
            taskData.map((key) => 
                <label className='completed'>
                    {key.name}
                </label>
            )
        }
    </div>
  )
}

export default Completed