import React, { useState } from 'react'
import axios from 'axios'

function Create() {
  const {task, setTask} = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3000/add', {task: task})
    .then(result => console.log(result))
    .catch(error => console.log(eror)
    ) 
  }
  return (
    <div className='create-form'>
        <input type="text" placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAdd}  type='button'>submit</button>
    </div>
  )
}

export default Create