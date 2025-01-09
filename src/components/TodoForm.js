import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [todoValue, setTodoValue] = useState ('')

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(todoValue);
        setTodoValue('')
        
    }
 

  return (
    <form className='flex items-center bg-gray-200 my-7 h-12
            rounded-full border-none border-green-700 ' onSubmit={handleSubmit}>

        <input type='text' className='outline-none bg-transparent 
            border-none flex-1 h-14 pl-5 placeholder:text-slate-600' 
            placeholder='Add Your Task' onChange={(e) => setTodoValue(e.target.value)} 
            value={todoValue}/>

        <button className='bg-green-700 border-none w-24 h-12 
        text-white cursor-pointer rounded-full ml-2'>Add +</button>      
    </form>
  )
}

export default TodoForm
