import React, { useState } from 'react'

const EditTodoFrom = ({editTodo, task}) => {
    const [todoValue, setTodoValue] = useState (task.task)

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(todoValue, task.id);
        setTodoValue('')
        
    }

  return (
    <form className='flex items-center bg-gray-200 my-1 h-12
            rounded-xl' onSubmit={handleSubmit}>

        <input type='text' className='outline-none bg-transparent 
            border-0 flex-1 h-14 pl-5 placeholder:text-slate-600' 
            placeholder='Add Your Task' onChange={(e) => setTodoValue(e.target.value)} 
            value={todoValue}/>

        <button className='bg-green-700 border-none w-20 h-12 
        text-white cursor-pointer rounded-xl ml-2'>Update</button>      
    </form>
  )
}

export default EditTodoFrom
