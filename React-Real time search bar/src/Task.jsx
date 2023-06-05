import React from 'react'
import './task.css'

const Task = ({x}) => {


   
    return  <li className="task">
        {x.name}
        </li>
}

export default Task