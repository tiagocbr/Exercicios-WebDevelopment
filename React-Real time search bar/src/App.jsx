import React, { useState } from 'react'
import Task from './Task'



const App = () => {


  const[tasks,setTasks] = useState([
   { 
    name: "task1"
  },
   {
    name: "task2"
  },
  { 
    name: "task3"
  },
  { 
    name: "task4"
  },
  { 
    name: "task5"
  },
  { 
    name: "task6"
  },
  { 
    name: "task7"
  },
  { 
    name: "task8"
  },
  { 
    name: "task9"
  },
  { 
    name: "task10"
  },
  { 
    name: "task11"
  },
  { 
    name: "task12"
  },
  { 
    name: "task13"
  },
  { 
    name: "task14"
  },
  { 
    name: "task15"
  },
  { 
    name: "task16"
  },
  { 
    name: "task17"
  },
  { 
    name: "task18"
  },
  { 
    name: "task19"
  },
  { 
    name: "task20"
  },

  ])

  const[show,setShow] = useState([
    { 
     name: "task1"
   },
    {
     name: "task2"
   },
   { 
     name: "task3"
   },
   { 
     name: "task4"
   },
   { 
     name: "task5"
   },
   { 
     name: "task6"
   },
   { 
     name: "task7"
   },
   { 
     name: "task8"
   },
   { 
     name: "task9"
   },
   { 
     name: "task10"
   },
   { 
     name: "task11"
   },
   { 
     name: "task12"
   },
   { 
     name: "task13"
   },
   { 
     name: "task14"
   },
   { 
     name: "task15"
   },
   { 
     name: "task16"
   },
   { 
     name: "task17"
   },
   { 
     name: "task18"
   },
   { 
     name: "task19"
   },
   { 
     name: "task20"
   },
 
   ])

  const handleFind = (name) => {

    let newtask = tasks.filter(task => task.name.includes(name))

    setShow(newtask)
  }


  const handleChange = (e) => {

    handleFind(e.target.value)
    
  }

  

  return <>

  <div className="container">

    <div >
      <div className='search'>
      <span>Search</span>
        
    
    <input  type='text' onChange={handleChange} className='input' ></input>
    </div>

    
    

    </div>
    <div className='search'>
      <span>Results</span>
        </div>
    
    {
      show.map((show) => (<Task x={show} />))
    }
    
    
  </div>
  
  
  </>
}

export default App

