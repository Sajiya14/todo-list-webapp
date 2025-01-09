import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa"; 
import checked from "../assets/checked.png";
import unchecked from "../assets/unchecked.png"

const Todos = ({task, deleteTodo, editTodo, toggle}) => {
  return (
    <div className='flex items-center bg-white
        py-2 px-4 rounded-md mb-1 cursor-pointer'>
      <div className='flex flex-1 items-center gap-2'>
        <img src={task.completed ? checked : unchecked} alt='' className='w-5 h-5'/>
          <p onClick={() => toggle(task.id)} className={`${task.completed ? "line-through":""} text-black`}>
          {task.task}</p>
      </div>
    
    <div className='flex items-center gap-x-4'>
      <FaEdit className='text-xl' color='green' onClick={() => editTodo(task.id)}/>
      <MdDelete className='text-xl' color='green' onClick={() => deleteTodo(task.id)}/>
    </div>
    </div>
  )
}

export default Todos
